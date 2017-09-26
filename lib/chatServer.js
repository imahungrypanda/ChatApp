const io = require('socket.io');

let chat;

const createChat = {
  handleMessageBroadcast (socket) {
    socket.on('message', (message) => {
      console.log("message");
      socket.broadcast.emit('message', {
        text: message.text
      })
    })
  },
  listen (server) {
    chat = io(server);

    chat.on('connection', socket => {
      console.log('connected');
      this.handleMessageBroadcast(socket);
    });
  }

}

module.exports = createChat;
