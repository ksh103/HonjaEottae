const express = require('express');
const http = require('http');
const app = express();
// server instance
const server = http.createServer(app);

const io = require('socket.io')(server, {
 allowEIO4: true,
 cors: {
   origin: '*',
   methods: ['GET', 'POST'],
 },
//  transports: ["websocket"]

});
io.of('/socket.io');
// const fs = require("fs");
// const httpServer = require("https").createServer({
//   key: fs.readFileSync("/var/www/html/privkey.pem"),
//   cert: fs.readFileSync("/var/www/html/cert.pem")
// });
//const options = {
//  key: fs.readFileSync("/var/www/html/privkey.pem"),
//  cert: fs.readFileSync("/var/www/html/cert.pem")
//};

//const io = require("socket.io")(httpServer, options);
// const io = require('socket.io')(httpServer, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST'],
//   },
// });


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

server.listen(4003);

