const express = require('express');
const app = express();
var server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use('/', express.static('public'));

app.listen(8000, () => console.log('localhost:8000'));

io.sockets.on('connection', function (socket) {
    socket.on('news', function (data) {
        socket.emit('news', { content: data.text });
        socket.broadcast.emit('news', { content: data.text});
    });
});

// console.log(io);
