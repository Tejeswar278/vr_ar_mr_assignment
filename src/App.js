import { useEffect, useRef, useState } from 'react';
import './App.css';
import bgvideo from "./assets/loadingsteam.mp4";
import secondpage from "./pages/secondpage";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  const [text,setText] = useState("inhale")
  const [time,setTime] = useState(3000)
  let coui = 0;
  useEffect(() => {
console.log(coui,"count of useEffect")
coui++
    // let timer1 = setTimeout(() => setText("hold"),3000);
    // let timer2 = setTimeout(() => {
    //   setText("exhale");
    //   clearTimeout(timer1)
    // },5000);
    let count = 1;
    let counte = 0;
    let interval = setInterval(function() {
      console.log(counte,"no of time it is getting called")
      counte++
      if(count == 3){
        setText("exhale")
      }
      if(count == 2){
        setText("hold")
        setTime(3000)
      }
      
      if(count == 1){
        setTime(2000)
      }
      count++
    }, time);
    return () => {
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

export default App;
