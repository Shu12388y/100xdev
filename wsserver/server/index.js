const http = require("http");
const { WebSocketServer } = require("ws");
const url = require("url");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });

// defing ws server

const connections = {}

wsServer.on("connection", (connection, request) => {
  const { username } = url.parse(request.url, true).query;
  console.log(username);

  connections[username] = connection;
 
});

server.listen(4000, () => {
  console.log("server is on");
});
