// server instance
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

// socketio 문법
io.on('connection', socket => {
  console.log('user connections: ', socket.id);

  socket.on('disconnect', function () {
    console.log('user disconnected: ', socket.id);
  });

  socket.on('leaveRoom', (num, name) => {
    console.log(name + 'leave a ' + `room${num}`);
    socket.leave(`room${num}`, () => {
      console.log(name + 'leave a ' + `room${num}`);
      io.to(`room${num}`).emit('leaveRoom', num, name);
    });
  });

  socket.on('joinRoom', (num, name) => {
    console.log('조인', num, name);
    socket.join(`room${num}`, () => {
      console.log(name + ' join a ' + `room${num}`);
      io.to(`room${num}`).emit('joinRoom', num, name);
    });
  });

  socket.on('chat message', (num, name, msg) => {
    io.to(`room${num}`).emit('chat message', { name: name, message: msg });
  });

  // socket.on('send message', item => {
  //   const msg = item.name + ' : ' + item.message;
  //   console.log(msg);
  //   io.emit('receive message', { name: item.name, message: item.message });
  // });
});

server.listen(4002, () => console.log(`Listening on port`));
