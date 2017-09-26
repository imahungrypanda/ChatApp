const io = require('socket.io');

let chat;

const createChat = {

  listen (server) {
    chat = io(server);

    chat.on('connection', function (socket) {
      console.log('connected');
    });
  }

}

module.exports = createChat;
