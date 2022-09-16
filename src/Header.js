import styles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <h2 className={styles.mention}>Hello everyone! it's test mention</h2>
    </div>
  );
}
//이런식으로 module로 css를 불러오면 해당하는 컴포넌트에 추가할 수 있다
