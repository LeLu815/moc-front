import React from "react";
import styles from "./PopularPostItem.module.css"; // Create this module CSS file for styling

const PopularPostItem = ({ title, excerpt, likes, comments, date }) => {
  return (
    <div className={styles.item}>
      <div className={styles.text_section}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.info_box}>
          <div className={styles.stats}>
            <span className={styles.likes}>{likes} likes</span>
            <span className={styles.comments}>{comments} comments</span>
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default PopularPostItem;
