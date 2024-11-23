import  {WebSocketServer} from "ws";



const wss = new WebSocketServer({port:8000});



// event handler
wss.on('connection',(socket)=>{
    console.log("connected")
    // setInterval(()=>{
    //     socket.send("Price of SOL is" + Math.random())
    // },500)


    //
    socket.on("message",(e)=>{
        console.log(e.toString())
        socket.send(e.toString())
    }) 
})
