const io = require('socket.io')(3000);

io.on('connection', socket=>{
    console.log('Client connected!');
})
