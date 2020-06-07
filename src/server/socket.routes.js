const uuid = require('uuid');
const moment = require('moment');

const getDate = () => moment().format('MMM YYYY, h:mm a');

module.exports = async (io) => {
  io.on('connection', (socket) => {
    console.log('new user connected', socket.id);

    socket.on('newMessage', (message) => {
      if (global.config.modeDev) console.log(message);
      // TODO: usar flat socket.broadcast.emit
      io.emit('message', {
        id: uuid.v4().slice(0, 8),
        emiter: message.emiter,
        text: message.text,
        date: getDate()
      });
    });
  });

  io.on('disconnect', (reason) => {
    console.log('user disconnected', reason);
  });
};
