import PropTypes from "prop-types";
import styles from "./Button.module.css";
export default function Button({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
      <button>asdasdasd</button>
    </div>
  );
}
