require('dotenv').config(); // 載入 .env 的設定
const path = require('path');
const http = require('http');
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const MysqlStore = require('express-mysql-session')(session);
// 上面require進來的是一個function，而要帶入的值是session

const moment = require('moment-timezone');
const upload = multer({
    dest: 'tmp_uploads/'
});
const uploadImg = require('./modules/upload-images');
const uploadVid = require('./modules/upload-videos');
const db = require('./modules/connect-mysql');
const sessionStore = new MysqlStore({}, db);

const socketIo = require('socket.io');
const {
    emit
} = require('process');

/*
因為我們已經有連線的設定，也就是connect-mysql，所以在大括號裡面不需要放任何東西，只要在最後放上要連到哪裡就好
*/

const app = express();

app.set('view engine', 'ejs');

/*
指定需要用的樣板引擎，這是預設位置，所以不需要再多一行設定，如果有改資料夾才需要用PDF裡的方式
*/

app.use(session({
    name: 'mySessionId',
    saveUninitialized: false,
    resave: false,
    secret: '54weewf254ewf4874gew231',
    store: sessionStore,
    cookie: {
        maxAge: 1200000, //20分鐘，這裡寫得是毫秒
    }
}));

const corsOptions = {
    credentials: true,
    origin: (origin, cb) => {
        // console.log(`origin: ${origin}`);
        cb(null, true);
    }
};
app.use(cors(corsOptions));


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}));

// parse application/json
app.use(express.json());
/* 上面的兩個才算是Top-level Middleware*/

// 直接訪問跟目錄
app.use('/', express.static('public'));

app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/@fortawesome/fontawesome-free', express.static('node_modules/@fortawesome/fontawesome-free/css/all.css'))

// 自訂middleware
app.use(async (req, res, next) => {
    res.locals.title = 'Wander';
    // 這裡可以設定所有網站的title
    res.locals.pageName = '';
    res.locals.keyword = '';

    //設定 template 的helper functions
    res.locals.dateToDateString = d => moment(d).format('YYYY-MM-DD');
    res.locals.dateToDateTimeString = d => moment(d).format('YYYY-MM-DD');
    res.locals.session = req.session; // 把session傳到頁面



    // jwt 驗證
    req.myAuth = null;  // 自訂的屬性 myAuth
    const auth = req.get('Authorization');
    if(auth && auth.indexOf('Bearer ')===0){
        const token = auth.slice(7);
        try{
            req.myAuth = await jwt.verify(token, process.env.JWT_SECRET);
            console.log('req.myAuth:', req.myAuth);
        } catch(ex) {
            console.log('jwt-ex:', ex);
        }
    }




    next();
})


// ***路由定義開始 ：BEGIN

app.get('/', (req, res) => {
    res.locals.title = '首頁-' + res.locals.title;
    res.render('home', {
        name: 'Josh'
    });
    // res.sendFile(__dirname + "/public/home.html");
})

//註冊
app.use('/SignUp', require(__dirname +'/routes/signup'));

//登入
app.use(require(__dirname + '/routes/login'));

//教師
app.use('/SingleMember', require(__dirname + '/routes/SingleMember'));
app.use('/member', require(__dirname + '/routes/member'));
app.use('/TcCourse', require(__dirname + '/routes/TcCourse'));


//聊天室
// app.use('/chat', require('./routes/chat'));

// 聊天室設定
const publicPath = path.join(__dirname + "/public/chat.html");
const server = http.createServer(app);
let io = socketIo(server);
const {
    generateMessage
} = require('./utils/message');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("A new user just connected");

    socket.emit("newMessage", generateMessage('Admin', 'Welcome to the chat!'));

    socket.broadcast.emit("newMessage", generateMessage('Admin', 'New User joined!'));

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        // cb('This is the server');
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});


/*
app.get("/video", function (req, res) {

    // Ensure there is a range given for the video
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }

    // get video stats (about 61MB)
    const videoPath = "";
    const videoSize = fs.statSync(videoPath).size;

    // Parse Range
    // Example: "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));

    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    // Create headers
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, {
        start,
        end
    });

    // Stream the video chunk to the client
    videoStream.pipe(res);

});
*/



//學生
app.use('/stprofile', require(__dirname + '/routes/stprofile'))
app.use('/stcourse', require(__dirname + '/routes/stcourse'))
//取得推薦教師資料
app.use('/api/teacherdata', require(__dirname + '/routes/recommandtc'))
//取得member email資料判斷註冊有無重複使用帳號
app.use('/api/accountdata', require(__dirname + '/routes/getaccount'))

// 測驗
app.use('/sentence-game', require(__dirname + '/routes/sentence-game'));
// 購物車
app.use('/cart', require(__dirname + '/routes/cart'));

app.get('/try-sess', (req, res) => {
    req.session.myVar = req.session.myVar || 0;
    req.session.myVar++;
    res.json(req.session);
})

app.get('/try-db', async (req, res) => {
    const [result] = await db.query('SELECT * FROM member WHERE `name` LIKE ?', ['%e%'])
    res.json(result);
});
// ***路由定義結束 ：END

app.use((req, res) => {
    res.status(404).send(`<h1>找不到頁面</h1>`)
})

let port = process.env.PORT || 3000;
const node_env = process.env.NODE_ENV || 'development';

server.listen(port, () => {
    console.log(`NODE_ENV: ${node_env}`);
    console.log(`啟動: ${port}`, new Date());
});