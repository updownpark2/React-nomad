import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";
import Button from "./Button.js";
import Header from "./Header.js";

function Hello() {
  useEffect(function () {
    console.log("hi!:)");
    return () => console.log("bye:(");
  }, []);

  return (
    <div>
      <h1>HaHA!!!</h1>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  const [boo, setBoo] = useState(true);
  console.log("렌더링될때마다되는놈");
  useEffect(() => {
    console.log("카운트변경");
  }, [count]);
  useEffect(() => {
    console.log("텍스트변경");
  }, [value]);
  useEffect(() => {
    if (count > 3 && value.length > 3) {
      console.log("조건만족");
    }
  }, [value]);
  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="test"
      />

      <button onClick={() => setBoo((e) => !e)}>Hide and Show</button>
      {boo ? <Hello /> : null}

      <h1>{count}</h1>
      <h2>{count * 10}</h2>
      <h3>{value}</h3>
      <button
        onClick={() => {
          setCount((e) => e + 1);
        }}
      >
        Up!
      </button>
    </div>
  );
}

// memo는 state가 변경되는 경우에만 렌더링이 되는 것 같고,
// useeffect는 아예 state가 변경되어도 렌더링이 안되는 것 같아요.
//그래서 api 같은 1번만 불러와도 되는 경우에 쓰이는 것 같고요
