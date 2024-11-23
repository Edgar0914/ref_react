import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [action, setAction] = useState(""); // Для текущей задачи
  const [doing, setDoing] = useState(() => {
    // Загрузка задач из Local Storage при первой загрузке
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Обновление Local Storage при изменении списка задач
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(doing));
  }, [doing]);

  // Обновление значения ввода
  const changeIn = (event) => {
    setAction(event.target.value);
  };

  // Добавление задачи
  const setSub = (event) => {
    event.preventDefault();
    if (action.trim()) {
      setDoing([...doing, action]);
      setAction(""); // Сбрасываем поле ввода
    }
  };

  // Удаление задачи по индексу
  const deleteTask = (indexToDelete) => {
    setDoing(doing.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <form onSubmit={setSub}>
        <input
          type="text"
          placeholder="Enter your action"
          value={action} // Привязка значения к состоянию
          onChange={changeIn}
        />
        <button type="submit">Add</button>
      </form>

      <h1>To-Do List</h1>
      <ul>
        {doing.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}


