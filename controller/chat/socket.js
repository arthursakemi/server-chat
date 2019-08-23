const app = require('express')();
const path = require('path')
const http = require('http').createServer(app);
const io = require('socket.io')(http);

module.exports = (req, res) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
    })

    res.sendFile(path.join(__dirname, '../../', 'public/html/chat.html'))
    
}