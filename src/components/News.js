import React from 'react';
import classes from './MainPage.module.css';
const News = ({ title }) => {
    return (
        <div className={classes.newsItem}>
            <p>{title}</p>
        </div>
    );
};

export default News;
