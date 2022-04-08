const fs = require('fs')
const httpServer = require('https').createServer({
  key: fs.readFileSync('/var/www/html/privkey.pem'),
  cert: fs.readFileSync('/var/www/html/cert.pem'),
})
const options = {
  key: fs.readFileSync('/var/www/html/privkey.pem'),
  cert: fs.readFileSync('/var/www/html/cert.pem'),
}

const io = require('socket.io')(httpServer, options)
//const io = require('socket.io')(httpServer, {
//  cors: {
//    origin: '*',
//    methods: ['GET', 'POST'],
//  },
//});

// socketio 문법
io.on('connection', socket => {
  console.log('user connections: ', socket.id)

  socket.on('disconnect', function () {
    console.log('user disconnected: ', socket.id)
  })

  socket.on('leaveRoom', (num, name) => {
    console.log(name + 'leave a ' + `room${num}`)
    socket.leave(`room${num}`, () => {
      console.log(name + 'leave a ' + `room${num}`)
      io.to(`room${num}`).emit('leaveRoom', num, name)
    })
  })

  socket.on('joinRoom', (num, name) => {
    console.log('조인', num, name)
    socket.join(`room${num}`, () => {
      console.log(name + ' join a ' + `room${num}`)
      io.to(`room${num}`).emit('joinRoom', num, name)
    })
  })

  socket.on('chat message', (num, name, msg) => {
    io.to(`room${num}`).emit('chat message', { name: name, message: msg })
  })
})

httpServer.listen(4003)
