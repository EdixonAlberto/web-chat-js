const uuid = require('uuid');
const moment = require('moment');

const getDate = () => moment().format('MMM YYYY, h:mm a');

module.exports = async (io) => {
  io.on('connection', (socket) => {
    console.log('new user connected', socket.id);

    io.emit('message', {
      id: 'BOT',
      text: 'Nuevo Usuario Conectado',
      date: getDate()
    });

    socket.on('newMessage', (message) => {
      if (global.config.modeDev) console.log(message);
      // TODO: usar flat socket.broadcast.emit
      io.emit('message', {
        id: uuid.v4().slice(0, 8),
        text: message,
        date: getDate()
      });
    });
  });

  io.on('disconnect', (reason) => {
    console.log('user disconnected', reason);
  });
};
