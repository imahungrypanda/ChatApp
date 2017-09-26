const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');

const chatServer = require('./lib/chatServer');

const PORT = 8000;

chatServer.listen(http);

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// });

http.listen(PORT, () => console.log(`localhost:${PORT}`));
