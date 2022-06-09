const http = require('http')

const apiServer = require('./api')
const server = http.createServer(apiServer)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const sockets = require('./sockets')

const PORT = 3000

server.listen(PORT)
console.log(`listening on port ${PORT}...`)

sockets.listen(io)
