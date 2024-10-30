import { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const [action, setAction] = useState("")
  const [doing, setDoing] = useState([])
  const changeIn = (event)=>{
    setAction(event.target.value)
  }
  const setSub = (event)=>{
    event.preventDefault()
    setDoing([...doing,action])
    setAction("")
  }
  return(  <>
  <form action="" onSubmit={setSub}>
    <input type="text" placeholder="Enter your action" onChange={changeIn}/>
    <button>Enter</button>
  </form>
  <h1>{doing.join("")}</h1>
    </>
  );
}

export default App;
