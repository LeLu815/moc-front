import styles from "./Clock.module.css";

const Clock = () => {
  return (
    <div class={styles.card}>
      <div class={styles.numbers}>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
        <span class={styles.number}></span>
      </div>
      <div class={styles.needles}>
        <span class={styles.h}></span>
        <span class={styles.m}></span>
        <span class={styles.s}></span>
        <span class={styles.center}></span>
      </div>
      <div class={styles.pie}></div>
    </div>
  );
};

export default Clock;
