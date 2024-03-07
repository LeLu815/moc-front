import styles from "./Advertisement.module.css";

const Advertisement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.palette}>
        <div className={styles.color}>
          <span>Save</span>
        </div>
        <div className={styles.color}>
          <span>Your</span>
        </div>
        <div className={styles.color}>
          <span>Time</span>
        </div>
        <div className={styles.color}>
          <span>with</span>
        </div>
        <div className={styles.color}>
          <span>US</span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
