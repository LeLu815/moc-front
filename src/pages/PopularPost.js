import React from 'react';
import PopularList from '../components/PopularPostsList';
import styles from './PopularPost.module.css'; // Create this module CSS file for styling

const PopularPostPage = () => {
  // Example data for popular posts
  const popularPosts = [
    {
      title: '리액트 마스터로의 여정',
      excerpt: '리액트의 깊은 곳으로 함께 떠나보며, 최신 기능들을 효과적으로 프로젝트에 어떻게 활용하는지 탐험해봅시다.',
      likes: 150,
      comments: 23,
      date: '2024-02-20'
    },
    {
      title: 'Understanding Redux in Modern Applications',
      excerpt: 'A comprehensive guide to managing state in your applications with Redux, complete with real-world examples.',
      likes: 99,
      comments: 42,
      date: '2024-02-18'
    },
    {
      title: 'Next.js vs. Create React App: Which Should You Choose?',
      excerpt: 'Comparing Next.js and Create React App for building your React projects. We discuss the pros and cons of each to help you decide.',
      likes: 75,
      comments: 30,
      date: '2024-02-15'
    },
    // Add more posts as needed
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

export default PopularPostPage;
