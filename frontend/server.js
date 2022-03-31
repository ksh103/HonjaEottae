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
const port = 4002;

// socketio 생성후 서버 인스턴스 사용
// const io = socketIO(server);

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
