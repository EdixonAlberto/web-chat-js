const io = require('socket.io-client');

const uri = process.env.NODE_ENV !== 'production' ? 'ws://localhost:5000/' : '';

const socket = io(uri, {
  path: '/ws'
});

export default socket;
