require('dotenv').config(); // 載入 .env 的設定
const http = require('http');
const express = require('express');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const MysqlStore = require('express-mysql-session')(session);
// 上面require進來的是一個function，而要帶入的值是session

const uploadImg = require('./modules/upload-images');
const db = require('./modules/connect-mysql');
const sessionStore = new MysqlStore({}, db);


/*
因為我們已經有連線的設定，也就是connect-mysql，所以在大括號裡面不需要放任何東西，只要在最後放上要連到哪裡就好
*/

const app = express();
const server = http.createServer(app);
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
    // jwt 驗證
    req.myAuth = null; // 自訂的屬性 myAuth
    const auth = req.get('Authorization');
    if (auth && auth.indexOf('Bearer ') === 0) {
        const token = auth.slice(7);
        try {
            req.myAuth = await jwt.verify(token, process.env.JWT_SECRET);
            console.log('req.myAuth:', req.myAuth);
        } catch (ex) {
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
app.use('/SignUp', require(__dirname + '/routes/signup'));
app.use('/GoogleLogin', require(__dirname + '/routes/googlelogin'))

//登入
app.use(require(__dirname + '/routes/login'));

//上傳單一照片使用
app.post('/try-upload2', uploadImg.single('avatar'), async (req, res) => {
    const output = {
        success: false,
        error: ''
    }
    const myfilename = req.file.filename
    const sql = `UPDATE \`member\` SET \`avatar\` = ? WHERE \`sid\` = ?`

    try {
        [result] = await db.query(sql, [myfilename, req.body.studentSid]);
    } catch (ex) {
        output.error = ex.toString();
    }
    output.result = result;
    if (result.affectedRows === 1) {
        if (result.changedRows === 1) {
            output.success = true;
        } else {
            output.error = "資料沒有變更";
        }
    }

    res.json(output);

});


//教師
app.use('/TcProfile', require(__dirname + '/routes/TcProfile'));
app.use('/member', require(__dirname + '/routes/member'));
app.use('/TcCourse', require(__dirname + '/routes/TcCourse'));
app.use('/TcVideo', require(__dirname + '/routes/TcVideo'));

//聊天室
// app.use('/chat', require('./routes/chat'));

//熱門文章-列表
app.use('/art_article_pop_list', require(__dirname + '/routes/art_article_pop_list'));

//國際角落-列表
app.use('/art_article_inter_list', require(__dirname + '/routes/art_article_inter_list'));

//文章-留言-列表
app.use('/art_messenger_list', require(__dirname + '/routes/art_messenger_list'));

//國際角落-內容
app.use('/art_inter_list', require(__dirname + '/routes/art_inter_list'));

//熱門文章-內容
app.use('/art_list', require(__dirname + '/routes/art_list'));

//文章-留言-修改-刪除
app.use('/art_messenger', require(__dirname + '/routes/art_messenger'));

//文章-新增留言
app.use('/art_messengerADD', require(__dirname + '/routes/art_messengerADD'));



//學生
app.use('/stprofile', require(__dirname + '/routes/stprofile'))
app.use('/stCalendar', require(__dirname + '/routes/stCalendar'))
//取得學生課程資料
app.use('/stcourse', require(__dirname + '/routes/stcourse'))
//取得推薦教師資料
app.use('/api/teacherdata', require(__dirname + '/routes/recommandtc'))
//取得member email資料判斷註冊有無重複使用帳號
app.use('/api/accountdata', require(__dirname + '/routes/getaccount'))
app.use('/passwordmodify', require(__dirname + '/routes/stpasswordmodify'))
//課程頁-詳細頁 //留言 //留言修改
app.use('/cs_course', require(__dirname + '/routes/cs_course'));
app.use('/cs_messenger', require(__dirname + '/routes/cs_messenger'));
app.use('/cs_messengerADD', require(__dirname + '/routes/cs_messengerADD'));
// 測驗
app.use('/sentence-game', require(__dirname + '/routes/sentence-game'));
// cart
app.use('/cart', require(__dirname + '/routes/cart'));
// order
app.use('/sendOrder', require(__dirname + '/routes/sendOrder'));
// chat
app.use('/conversation', require(__dirname + '/routes/conversation'));
app.use('/message', require(__dirname + '/routes/message'));


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