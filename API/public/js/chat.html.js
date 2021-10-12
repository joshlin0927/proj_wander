let socket = io(); // 跟後端要資料，後端會回傳

socket.on('connect', () => {
    console.log('Connected to server');
})

socket.on('disconnect', () => {
    console.log('Disconnected from server');
})

socket.on('newMessage', (message) => {
    console.log("newMessage", message);
    let li = document.createElement('li');
    li.innerText = `${message.from}: ${message.text}`

    document.querySelector('#message-box').appendChild(li);
})

document.querySelector("#submit-btn").addEventListener('click', function(e){
    e.preventDefault();
    socket.emit("createMessage", {
        from: 'User',
        text: document.querySelector('input[name=message]').value
    }, function () {
        
    })
})