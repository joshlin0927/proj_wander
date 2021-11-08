const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userID, socketID) => {
  !users.some((user) => user.userID === userID) &&
    users.push({ userID, socketID });
};
const removeUser = (socketID) => {
  users = users.filter((user) => user.socketID !== socketID);
};
const findUser = (userID) => {
  return users.find((user) => user.userID === userID);
};

io.on("connection", (socket) => {
  // 用戶連線
  console.log("a user connected.");

  // 取得member.sid & socketID
  socket.on("addUser", (userID) => {
    addUser(userID, socket.id);
    io.emit("getUsers", users);
  });

  // 傳遞訊息
  socket.on("sendMessage", ({ senderID, receiverID, text }) => {
      const user = findUser(receiverID);
      io.to(user.socketID).emit('getMessage', {
        senderID,
          text,
      });
  });

  // 用戶離線
  socket.on("disconnect", () => {
    console.log("a user disconnected.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});