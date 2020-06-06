const Server = require('./Server');
require('../config');

async function main() {
  const server = new Server({
    pathSocket: '/ws',
    httpPort: 5000
  });

  server.httpStart();
  server.socketStart();
}

main();
