const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/event") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });

    const interval = setInterval(() => {
      res.write(`data:${new Date().toISOString()}`);
    }, 3000);

    res.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  }
  else{
    res.write('server is on')
    res.end()
  }
});


server.listen(3000,()=>{
    console.log("server in on")
})
