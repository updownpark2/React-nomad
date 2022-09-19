import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Button.module.css";
export default function Button({ text, Bcolor, fontsize }) {
  const [go, setGo] = useState(0);

  useEffect(() => {
    console.log("render!");
  }, [go]);

  return (
    <div>
      <button
        onClick={() => {
          setGo((current) => current + 1);
        }}
        style={{ fontSize: fontsize, backgroundColor: Bcolor, color: "white" }}
      >
        {text}
      </button>
      <p>{go}</p>
    </div>
  );
}
