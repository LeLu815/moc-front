import styles from "./TapeShape.module.css";

const TapeShape = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.ups}>
          <div className={styles.screw1}>+</div>
          <div className={styles.screw2}>+</div>
        </div>
        <div className={styles.card1}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.yl}>
            <div className={styles.roll}>
              <div className={styles.s_wheel}></div>
              <div className={styles.tape}></div>
              <div className={styles.e_wheel}></div>
            </div>
            <p className={styles.num}>90</p>
          </div>
          <div className={styles.or}>
            <p className={styles.time}>2×30min</p>
          </div>
        </div>
        <div className={styles.card2_main}>
          <div className={styles.card2}>
            <div className={styles.c1}></div>
            <div className={styles.t1}></div>
            <div className={styles.screw5}>+</div>
            <div className={styles.t2}></div>
            <div className={styles.c2}></div>
          </div>
        </div>
        <div className={styles.downs}>
          <div className={styles.screw3}>+</div>
          <div className={styles.screw4}>+</div>
        </div>
      </div>
    </div>
  );
};

export default TapeShape;
