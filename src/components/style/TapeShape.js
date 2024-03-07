import styles from "./TapeShape.module.css";

const TapeShape = () => {
  return (
    <div class={styles.main}>
      <div class={styles.card}>
        <div class={styles.ups}>
          <div class={styles.screw1}>+</div>
          <div class={styles.screw2}>+</div>
        </div>
        <div class={styles.card1}>
          <div class={styles.line1}></div>
          <div class={styles.line2}></div>
          <div class={styles.yl}>
            <div class={styles.roll}>
              <div class={styles.s_wheel}></div>
              <div class={styles.tape}></div>
              <div class={styles.e_wheel}></div>
            </div>
            <p class={styles.num}>90</p>
          </div>
          <div class={styles.or}>
            <p class={styles.time}>2×30min</p>
          </div>
        </div>
        <div class={styles.card2_main}>
          <div class={styles.card2}>
            <div class={styles.c1}></div>
            <div class={styles.t1}></div>
            <div class={styles.screw5}>+</div>
            <div class={styles.t2}></div>
            <div class={styles.c2}></div>
          </div>
        </div>
        <div class={styles.downs}>
          <div class={styles.screw3}>+</div>
          <div class={styles.screw4}>+</div>
        </div>
      </div>
    </div>
  );
};

export default TapeShape;
