const app = express()
const server = http.createServer(app);


const path_root = '/var/www/html';
const options = {
  key: fs.readFileSync('${path_root}/privkey.pem'),
  cert: fs.readFileSync('${path_root}/cert.pem'),
  requestCert: true,
  rejectUnauthorized: false,
}

const httpsServer = https.createServer(options, app);
httpsServer.listen(4002, () => {
  console.log('Started server on https');
})

const io = require('socket.io')(server);
io.attach(httpsServer)

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
