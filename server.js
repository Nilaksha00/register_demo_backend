const http = require('http');
const app = require('./app');
const port = 3040;

const server = http.createServer(app);
server.listen(port, () =>{
   console.log("listing to port");
})