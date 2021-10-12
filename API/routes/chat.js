const path = require('path');
const http = require('http');
const express = require('express');
const router = express.Router();

const socketIo = require('socket.io');



const publicPath = path.join(__dirname + "/../public/chat.html");

let app = express();
const server = http.createServer(app);
let io = socketIo(server);

router.use(express.static(publicPath));


module.exports = router;