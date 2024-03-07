import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./MainPage.module.css";
const News = ({ title, date, id, detailId }) => {
  const navitate = useNavigate();
  const formedDate = date && new Date(date);
  return (
    <div
      className={classes.newsItem}
      onClick={() => {
        if (id) {
          navitate(`/posts/list/${id}/`);
        } else {
          navitate(`/posts/detail/${detailId}/`);
        }
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
