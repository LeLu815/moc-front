import React from 'react';
import PopularList from '../components/PopularPostsList';
import styles from './PopularPosts.module.css'; // Create this module CSS file for styling

const PopularPostsPage = () => {
  const popularPosts = [
    // Add your posts data here
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>HOT 게시판</h1>
        {/* Add more header content if needed */}
      </header>
      <PopularList posts={popularPosts} />
    </div>
  );
};

export default PopularPostsPage;
