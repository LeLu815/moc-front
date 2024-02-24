import React from "react";
import classes from "./MainPage.module.css";
const News = ({ title, date }) => {
  const formedDate = date && new Date(date);
  return (
    <div className={classes.newsItem}>
      <span>{title}</span>
      {formedDate && (
        <span>{`${formedDate.getFullYear()}-${formedDate.getMonth()}-${formedDate.getDate()}`}</span>
      )}
    </div>
  );
};

export default News;
