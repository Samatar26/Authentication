// Main starting point of the application
const bodyParser = require('body-parser');
const morgan = require('morgan');
const hapi = require('hapi');
// App Setup

// Server Setup
const port = process.env.PORT || 3000;
const server = new hapi.Server();
server.connection({
  port,
});

module.exports = server;
