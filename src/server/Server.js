const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { join } = require('path');
const socketRoutes = require('./socket.routes');

class Server {
  app = express();
  server = http.createServer(this.app);
  config = {};

  constructor(_config) {
    this.config = _config;
    this.middleware();
  }

  middleware() {
    if (process.env.NODE_ENV === 'production') {
      this.app.use(
        express.static(join(__dirname, 'build'), {
          extensions: 'html',
          redirect: true
        })
      );
    }
    // TODO: agregar cors
  }

  socketStart() {
    const io = socketIO(this.server, {
      path: this.config.pathSocket,
      serveClient: false,
      pingInterval: 30000,
      pingTimeout: 12000,
      cookie: false,
      transports: ['polling', 'websocket']
    });

    // TODO: agregar estos valores, por medio de environment
    // io.set('origin', '*:*');

    io.on('connection', socketRoutes);
    console.log('>> Socket OK');
  }

  httpStart() {
    try {
      this.server.listen(this.config.httpPort);
      console.log('>> Server OK');
    } catch (error) {
      console.error('!! Server ERROR:', error);
    }
  }
}

module.exports = Server;
