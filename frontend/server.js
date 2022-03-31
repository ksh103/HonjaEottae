const express = require('express');
const fs = require('fs');
const path = require('path');
const HTTPS = require('https');

const app = express();

try {
  const option = {
    ca: fs.readFileSync('/var/www/html/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/var/www/html/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/var/www/html/cert.pem'), 'utf8').toString(),
  };

  HTTPS.createServer(option, app).listen(4002, () => {
    colorConsole.success(`[HTTPS] Soda Server is started on port ${colors.cyan(4002)}`);
  });
} catch (error) {
  colorConsole.error('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
  colorConsole.warn(error);
}

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
