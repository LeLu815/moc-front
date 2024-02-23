import styles from "./LoginBtn.module.css";

export const LoginBtn = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      카카오 로그인
    </button>
  );
};
