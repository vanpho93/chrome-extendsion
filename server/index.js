const io = require('socket.io')(3000);

io.on('connection', socket => {
    console.log(socket.id);

    socket.on('NEW_FOX_SIGNAL', signal => {
        console.log(signal);
    })
});
