import React from 'react';
import classes from './write.module.css';

const WritingArea = () => {
  return (
    <div className={classes.writingArea}>
      <input className={classes.titleInput} type="text" placeholder="제목" />
      <textarea className={classes.contentInput} placeholder="내용을 입력하세요." />
      {}
      <div className={classes.actions}>
        <button className={classes.actionButton}># 해시태그</button>
        <button className={classes.actionButton}># 해시태그 추가</button>
        {}
        <button className={classes.iconButton}>↻</button>
        <button className={classes.iconButton}>✎</button>
      </div>
    </div>
  );
};

export default WritingArea;
