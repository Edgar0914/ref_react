import { users } from "./data";
export default function Header ({name, age, sex}){
return(
    <>
   <header>
      <strong>Users:</strong>
      <span>
        {users.map((user, index) => (
          <div key={index}>
            <strong>Name:</strong> <span>{user.name}</span><br />
            <strong>Age:</strong> <span>{user.age}</span><br />
            <strong>Sex:</strong> <span>{user.sex}</span>
            {index < users.length - 1 && <hr />} {/* Разделитель между пользователями */}
          </div>
        ))}
      </span>
    </header>
    </>
)
} 