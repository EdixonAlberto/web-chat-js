const io = require('socket.io-client');

const socket = io('ws://localhost:5000/', {
  path: '/ws'
});

export default socket;
