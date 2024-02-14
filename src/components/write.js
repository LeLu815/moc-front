import React from 'react';
import classes from './write.module.css';
import WritingArea from './WritingArea.js';
import Advertisement from './Advertisement';
import Footer from './Footer';

const Write = () => {
  return (
    <div className={classes.container}>
      <div className={classes.writeContainer}>
        <h1 className={classes.title}>글쓰기</h1>
        <WritingArea />
      </div>
      <div className={classes.adContainer}>
        <Advertisement />
      </div>
      <Footer />
    </div>
  );
};

export default Write;
