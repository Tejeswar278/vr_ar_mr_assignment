import { useEffect, useState } from 'react';
import './firstpage.css';
import bgvideo from ".././assets/loadingsteam.mp4";
import { Navigate } from "react-router-dom"

function Firstpage() {
  const [text,setText] = useState("inhale")
  const [time,setTime] = useState(3000)
  const [count,setCount] = useState(1)
  let coui = 0;
  useEffect(() => {
  console.log(coui,"useEffect")
  
    let counte = 0;
    console.log("before set interval")
    console.log(count,"count")
    let interval
    if(count <= 3){
      interval = setInterval(function() {
        console.log(counte,"setinterval count");
        console.log(time,"setinterval time")
        counte++
        if(count === 3){
            console.log("exit to second page")
            document.location.href = "https://lucent-profiterole-e2b983.netlify.app/"
        }
        if(count === 2){
          console.log("set-int count 2")
          setText("exhale")
          setTime(3000)
          setCount(3)
        }
        
        if(count === 1){
          console.log("set-int count 1")
          setText("hold")
          setTime(2000)
          setCount(2)
        }
      }, time);
    }
    coui++
    return () => {
        <Navigate to='/componentURL' />
        window.open("/secondpage")
      clearInterval(interval)
    }
  })
  return (
    <div className="App">
      <video src={bgvideo} autoPlay loop />
      <div className='content'>
        <div>
          {text}
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
