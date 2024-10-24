import { users } from "./data";
import { useState } from "react";
export default function Header({ name, age, sex }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <strong>Users:</strong>
        <span>
          {users.map((user, index) => (
            <div key={index}>
              <strong>Name:</strong> <span>{user.name}</span>
              <br />
              <strong>Age:</strong> <span>{user.age}</span>
              <br />
              <strong>Sex:</strong> <span>{user.sex}</span>
              {index < users.length - 1 && <hr />}
            </div>
          ))}
        </span>
        <h1>How many users did you want to see here? </h1>
          <button onClick={()=> setCount(count + 1)}>Add</button>
        <span>{count}</span>
        <p>You clicked {count}</p>
      </header>
    </>
  );
}
