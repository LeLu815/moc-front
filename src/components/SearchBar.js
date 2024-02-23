import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={classes.searchBarContainer}>
            <div className={classes.searchBar}>
                <input type="text" placeholder="   검색하고 싶은 내용을 입력하세요" />
                <button>🔍</button>
            </div>
        </div>
    );
};

export default SearchBar;
