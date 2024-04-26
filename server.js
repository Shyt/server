const server = require('express')();
const http = require('http').createServer(server);
const cors = require('cors');
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ["GET", "POST"]
    }
});

io.on('connection', function(socket) {
    console.log(`A user connected: ${socket.id}`);
})

http.listen(3000, function() {
    console.log('started');
});