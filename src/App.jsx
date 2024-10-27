import { useState } from "react";
import Header from "./Header";
import "./App.css";



function App() {
  const [name,setName] = useState("");
  const [age, setAge] = useState("")
  const changeAge = (event)=>{
    setAge(event.target.value)

  }
  const changeName = (event)=>{
    setName(event.target.value)
  }
  const onSub = (event)=>{
    event.preventDefault();
    alert (`My name is ${name} ang i am ${age}`)
  }
    return <>
  <Header />
  <div><h1>Hello world!</h1></div>
  <form action="" onSubmit={onSub}>
    <input type="text" value={name} onChange={changeName} /> <br />
    <input type="text" value={age} onChange={changeAge} />
    <button type="submit">Click</button>
  </form>
  </>;
}

export default App;
