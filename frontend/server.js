const fs = require("fs");
const httpServer = require("https").createSecureServer({
  //allowHTTP1: true,
  key: fs.readFileSync("/var/www/html/key.pem"),
  cert: fs.readFileSync("/var/www/html/cert.pem")
});
const options = {
  key: fs.readFileSync('/var/www/html/privkey.pem'),
  cert: fs.readFileSync('/var/www/html/cert.pem'),
  requestCert: true,
  rejectUnauthorized: false,
}

const io = require("socket.io")(httpServer, options);

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

httpServer.listen(4002);