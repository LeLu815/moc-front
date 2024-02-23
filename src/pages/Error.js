import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router v6
import background from './Home page.png'; // Update with the actual path to your background image
import questionMark from './FRONT 1.png'; // Update with the actual path to your question mark image
import styles from './Error.module.css'; // Update with the actual path to your CSS module

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/MainPage'); // Make sure this path is correctly defined in your router
  };

  return (
    <div className={styles.errorPage} style={{ backgroundImage: `url(${background})` }}>
      <img src={questionMark} alt="Question Mark" className={styles.questionMark} />
      <h1>404 Not Found</h1>
      <div className={styles.errorMessage}>페이지가 존재하지 않습니다</div>
      <div className={styles.subMessage}>The page you requested could not be found</div>
      <button onClick={goHome} className={styles.homeButton}>홈으로 돌아가기</button>
    </div>
  );
};

export default ErrorPage;