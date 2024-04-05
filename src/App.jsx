import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    let timer=setInterval(()=>{
      setCount((prev)=>prev+1);
    },1000)
    
    return ()=>clearInterval(timer);
  },[count])

  return (
    <>
      <span>{count}</span>
    </>
  )
}

export default App
