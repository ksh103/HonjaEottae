const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// localhost 포트 설정
const port = 4002;

const app = express();

// server instance
const server = http.createServer(app);

// socketio 생성후 서버 인스턴스 사용
const io = socketIO(server);

// socketio 문법
io.on('connection', socket => {
  console.log('user connections: ', socket.id);
  socket.on('disconnect', function () {
    console.log('user disconnected: ', socket.id);
  });

  socket.on('join', name => {
    console.log(`${name}님 `);
    socket.join(name, () => {
      console.log(`${name}님 방 입장`);
    });
  });
  socket.on('send message', item => {
    const msg = item.name + ' : ' + item.message;
    console.log(msg);
    io.to(item.room).emit('receive message', {
      name: item.name,
      message: item.message,
    });
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
