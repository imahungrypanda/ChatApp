var socket = io.connect('http://localhost:8000/');
socket.on('news', function (data) {
  document.body.innerHTML += data.content + "<br />";
});

function sendMessage() {
    socket.emit('news', { text: document.getElementById('Username').value + ": " + document.getElementById('Content').value });
}
