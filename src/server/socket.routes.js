module.exports = async (socket) => {
  socket.on('test', (data) => {
    console.log(data);
  });
};
