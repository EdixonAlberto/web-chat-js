module.exports = async (io) => {
  io.on('connection', (socket) => {
    console.log('new user connected');
    // io.emit('newUser'); // TODO:

    socket.on('newMessage', (message) => {
      if (global.config.modeDev) console.log(message);
      io.emit('message', message); // TODO: usar flat socket.broadcast.emit
    });
  });

  io.on('disconnect', (reason) => {
    console.log('user disconnected', reason);
  });
};
