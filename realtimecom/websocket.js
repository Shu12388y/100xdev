const Ws = require("ws");

const wss = new Ws.Server({ port: 3000 });

// create room
wss.on("connection", (socket) => {
  console.log("client connected");

  socket.send("Hello world");

  socket.on("message", (msg) => {
    console.log(msg);
    socket.send("Hello server");
  });
});

console.log("websocket  server running");
