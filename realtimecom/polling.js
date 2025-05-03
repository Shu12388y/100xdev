const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/poll") {
    setTimeout(() => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({message:`Time ${new Date().toISOString()}`}))
    }, 3000);
  }
  else{
    res.writeHead(200,{
        "Content-Type":"application/json"
    })
    res.end(JSON.stringify(`server is up`))
  }
});


server.listen(3000,()=>{
    console.log('server is up')
})