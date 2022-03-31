// var fs = require('fs');
// var path_root = '/var/www/html';
// var options = {
//   cert: fs.readFileSync(`${path_root}cert.pem`),
//   key: fs.readFileSync(`${path_root}privkey.pem`),
// };
// var https = require('https').createServer(options, app);
// https.listen(4002, () => {
//   console.log('https- listening on *:4002');
// });
// const io = require('socket.io').listen(https);

const express = require('express');
const http = require('http');
const app = express();
// server instance
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// localhost 포트 설정
const port = 80;

// socketio 문법
io.on('connection', socket => {
  console.log('user connections: ', socket.id);
  socket.on('send message', item => {
    const msg = item.name + ' : ' + item.message;
    console.log(msg);
    io.emit('receive message', { name: item.name, message: item.message });
  });
  socket.on('disconnect', function () {
    console.log('user disconnected: ', socket.id);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
