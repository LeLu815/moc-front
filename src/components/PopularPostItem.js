import React from 'react';
import styles from './PopularPostItem.module.css'; // Create this module CSS file for styling

const PopularPostItem = ({ title, excerpt, likes, comments, date }) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.stats}>
        <span className={styles.likes}>{likes} likes</span>
        <span className={styles.comments}>{comments} comments</span>
      </div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default PopularPostItem;
