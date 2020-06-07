const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { resolve } = require('path');
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
    this.app.use(
      express.static(resolve('build'), {
        extensions: '.html',
        redirect: true
      })
    );

    this.app.use('/', (req, res) => {
      res.send(resolve(__dirname, 'build'));
    });

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

    socketRoutes(io);
    console.log('>> Socket OK');
  }

  httpStart() {
    try {
      this.server.listen(process.env.PORT || this.config.httpPort);
      console.log('>> Server OK');
    } catch (error) {
      console.error('!! Server ERROR:', error);
    }
  }
}

module.exports = Server;
