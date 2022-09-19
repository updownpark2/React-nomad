import { useState, useEffect } from "react";
import Button from "./Button.js";
import Header from "./Header.js";

export default function RecapApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>welcome</h1>
      <h2>
        you clicked :{count}{" "}
        <button
          onClick={() => {
            setCount((current) => current + 1);
          }}
        >
          click
        </button>
      </h2>
      <Button text="Just Recap" Bcolor="tomato" fontsize={20} />
    </div>
  );
}
// memo는 state가 변경되는 경우에만 렌더링이 되는 것 같고,
// useeffect는 아예 state가 변경되어도 렌더링이 안되는 것 같아요.
//그래서 api 같은 1번만 불러와도 되는 경우에 쓰이는 것 같고요
