import { useState, useEffect } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <h1>내 할 일은 {todos.length}개</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodo("");
          setTodos((currentArray) => [todo, ...currentArray]);
        }}
      >
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// memo는 state가 변경되는 경우에만 렌더링이 되는 것 같고,
// useeffect는 아예 state가 변경되어도 렌더링이 안되는 것 같아요.
//그래서 api 같은 1번만 불러와도 되는 경우에 쓰이는 것 같고요
