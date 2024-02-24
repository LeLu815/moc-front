import styles from "./Clock.module.css";

const Clock = () => {
  return (
    <div className={styles.card}>
      <div className={styles.numbers}>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
        <span className={styles.number}></span>
      </div>
      <div className={styles.needles}>
        <span className={styles.h}></span>
        <span className={styles.m}></span>
        <span className={styles.s}></span>
        <span className={styles.center}></span>
      </div>
      <div className={styles.pie}></div>
    </div>
  );
};

export default Clock;
