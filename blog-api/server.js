const http = require('http');
const app = require('./app'); 
const server = http.createServer(app);
const port = process.env.PORT || 4000;
const cors = require('cors');
const mongoose = require('mongoose');
// const fs = require('file-system');

server.listen(port, function(){
  console.log("Database listening on port " + port);
});
