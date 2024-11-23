import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [message,setMessage] =  useState('');
  const [id,setId] =  useState('');
  const [d,setData] =  useState([])
  const [socket,setSocket] = useState(null);


  useEffect(()=>{
    const newSocket  = new WebSocket('ws://localhost:8000');
    newSocket.onopen = ()=>{
      console.log("connected")
    }
    setSocket(newSocket)

    newSocket.onmessage =(message)=>{
      console.log(message.data)
      setData([...d,message.data])
    }

    return ()=> newSocket.close();
  },[])

  // useEffect(()=>{
  //   if(!socket){
  //     return;
  //   }
  //   socket.onmessage = (message) =>{
  //     console.log(message.data)
  //     setData([...data,m.data])
  //   }
  // },[])

  function sendMessage(){
    socket.send(message)
  }

  return (
    <>
      <h1>WebSocket</h1>
        {d ? d.map((e,index)=>{
            return(
              <>
              <div key={index}>
              {e}
              </div>
              </>
            )
        }): "no message"}
      <input type="text" onChange={(e)=>setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send message</button>
    </>
  )
}

export default App
