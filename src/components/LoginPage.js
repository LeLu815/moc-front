import React from 'react';
import styles from './LoginPage.module.css'; // Ensure this path is correct

// Define the LoginPage component
const LoginPage = () => {
  
  return (
    <div className={styles.loginPage}>
      <div className={styles.logoContainer}>
        <img src="logo1.png" alt="MoC: Moment Craft" /> {/* Make sure logo1.png is in the public folder or correctly imported */}
      </div>
      <div className={styles.sloganContainer}>
        <h1>MoC: Moment Craft</h1>
        <h2>: Moment Craft</h2>
        <p>Don't Waste a Single Second</p>
        <p>: Time-Efficient Society</p>
      </div>
      <LoginBtn onClick={handleLogin} text="카카오 로그인" />
    </div>
  );
};

export default LoginPage;
