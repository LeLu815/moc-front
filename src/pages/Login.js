import { LoginBtn } from "../components/LoginBtn";

import { kakaoAccessFunc } from "../util/kakoAuth";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const handleLogin = () => {
    kakaoAccessFunc();
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>MoC</div>
        <div className={styles.sub_title}>: Moment Craft</div>
        <div className={styles.text_box}>
          <span>Don't Waste a Single Second</span>
          <span>:Time-Efficient Society</span>
        </div>
        <LoginBtn onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
