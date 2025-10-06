import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(58);
  const [minute,setMinute]= useState(60);
  const [hour,setHour]= useState(0);

  useEffect(()=>{
    let timer=setInterval(()=>{
      setCount((prev)=>prev+1);
    },1000)

    if(count>60){
      setMinute((prev)=>prev+1);
      setCount(0)
    }

    if(minute>60){
      setHour((prev)=>prev+1);
      setMinute(0)
    }
    
    return ()=>clearInterval(timer);
  },[count])


  return (
    <>
      <span>{hour}:{minute}:{count}</span>
    </>
  )
}

export default App
