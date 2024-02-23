// src/components/PopularPosts/PopularPostsList.js
import React from 'react';
import PopularPostItem from './PopularPostItem';
import styles from './PopularPostsList.module.css'; // Create this module CSS file for styling

const PopularPostsList = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts.map((post, index) => (
        <PopularPostItem key={index} {...post} />
      ))}
    </div>
  );
};

export default PopularPostsList;
