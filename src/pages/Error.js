import { useRouteError } from "react-router-dom";

import { useNavigate } from "react-router-dom"; // React Router v6
import background from "./Home page.png"; // Update with the actual path to your background image
import questionMark from "./FRONT 1.png"; // Update with the actual path to your question mark image
import styles from "./Error.module.css"; // Update with the actual path to your CSS module

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  let title = "An error ocurred!";
  let message = "잘못된 접근입니다!";
  let en_message = "";

  const goHome = () => {
    navigate("/");
  };
  if (error.status === 500) {
    message = JSON.parse().message;
    en_message = JSON.parse().en_message;
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "페이지가 존재하지 않습니다";
    en_message = "Could not find resource or page.";
  }

  return (
    <div
      className={styles.errorPage}
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        src={questionMark}
        alt="Question Mark"
        className={styles.questionMark}
      />
      <h1>{title}</h1>
      <div className={styles.errorMessage}>{message}</div>
      <div className={styles.subMessage}>{en_message}</div>
      <button onClick={goHome} className={styles.homeButton}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default ErrorPage;
