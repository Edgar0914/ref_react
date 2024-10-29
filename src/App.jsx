import { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [second,setSecond] = useState(0)
  const handleChangeName = (event)=>{
    setName(event.target.value)
  }
  const handleChangeAge = (event)=>{
    setAge(event.target.value)
  }
  const onSubmitted  =(event)=>{
    event.preventDefault()
    alert(`${name} ${age}`)
  }
 
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(prevSecond => prevSecond + 1); // Используем стрелочную функцию правильно
    }, 1000);
  
    return () => {
      clearInterval(interval); // Используем 'interval' для очистки
    };
  }, []);
  return (
    <>
      <h1>Hello my friends</h1>
      <h2>Please chek this form </h2>
      <form action="" onSubmit={onSubmitted}>
        <input type="text" onChange={handleChangeName}/> <br />
        <input type="text" onChange={handleChangeAge} /> <br />
        <button type="submit">Submit</button>
      </form>
      <p>Second: {second}</p>
    </>
  );
}

export default App;
