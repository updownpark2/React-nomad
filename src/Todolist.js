import { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todoarr, setTodoarr] = useState([]);

  return (
    <div>
      <h1>Hello my TodoList : {todoarr.length}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value = "";
          setTodoarr((currentarr) => [todo, ...currentarr]);
        }}
      >
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="Todo"
        />
        <button>click</button>
      </form>
      <hr />
      <ul>
        {todoarr.map((item, index) => (
          <li id={index} key={index}>
            {item}
            <button
              onClick={(e) => {
                const LIID = e.target.parentElement.id;
                setTodoarr((currentarr) =>
                  currentarr.filter((item, index) => index !== LIID * 1)
                );
              }}
              style={{
                margin: "0 5px",
                backgroundColor: "white",
                border: "1px solid tomato",
                borderRadius: "5px",
              }}
            >
              삭제!
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
