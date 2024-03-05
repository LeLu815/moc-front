import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./MainPage.module.css";
const News = ({ title, date, id }) => {
  const navitate = useNavigate();
  const formedDate = date && new Date(date);
  return (
    <div
      className={classes.newsItem}
      onClick={() => {
        navitate(`/posts/list/${id}/`);
      }}
    >
      <span>{title}</span>
      {formedDate && (
        <span>{`${formedDate.getFullYear()}-${formedDate.getMonth()}-${formedDate.getDate()}`}</span>
      )}
    </div>
  );
};

export default News;
