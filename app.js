const config = require('./config/config')
const http = require('http')
const port = process.argv[2] || 3000
const App = config.setUpServer()
const server = http.createServer(App)

server.listen(port, () => {
    console.log('-----------------------\n|      SERVER ON!     |\n|     Porta: ' + port + '     |\n-----------------------')
})

var io = require('socket.io')(server);
    io.on('connection', (socket) => {
        console.log('User connected')
        socket.on('chat message', (msg) => {
            io.emit('chat message',  msg)
        })
        socket.on('disconnect', function(){
            console.log('user disconnected')
        })
    })