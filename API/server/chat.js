const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');


const publicPath = path.join(__dirname + "/../public/chat.html");

let app = express();
const server = http.createServer(app);
let io = socketIo(server);

app.use(express.static(publicPath));


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




const port = process.env.CHATPORT || 3800

server.listen(port, () => {
    console.log(`NODE_ENV: ${node_env}`);
    console.log(`啟動: ${port}`, new Date());
});