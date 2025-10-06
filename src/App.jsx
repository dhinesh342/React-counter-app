import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [totalSec, setTotalSec] = useState(0);
  // const [minute,setMinute]= useState(60);
  // const [hour,setHour]= useState(0);

  // useEffect(()=>{
  //   let timer=setInterval(()=>{
  //     setCount((prev)=>prev+1);
  //   },1000)

  //   if(count>60){
  //     setMinute((prev)=>prev+1);
  //     setCount(0)
  //   }

  //   if(minute>60){
  //     setHour((prev)=>prev+1);
  //     setMinute(0)
  //   }
    
  //   return ()=>clearInterval(timer);
  // },[count])

  useEffect(()=>{
    let timer=setInterval(() => {
      setTotalSec((prev)=>prev+1);
    }, 1000);

    return ()=>clearInterval(timer)
  },[])

  const hour=Math.floor(totalSec/3600);
  const seconds=totalSec%60;
  const minute=Math.floor((totalSec/60)%60);
  // const minute = Math.floor((totalSec % 3600) / 60);


  return (
    <>
      <span>{hour}:{minute}:{seconds}</span>
    </>
  )
}

export default App
