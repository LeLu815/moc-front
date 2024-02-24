import React, { useState } from 'react';
import styles from './SearchResults.module.css'; // Assume you have CSS module for styling

const SearchResults = ({ results }) => {
  // If you are fetching results, they should be passed as props to this component

  return (
    <div className={styles.resultsContainer}>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            <h2 className={styles.resultTitle}>{result.title}</h2>
            <p className={styles.resultDescription}>{result.description}</p>
            {/* You can add more details like result.image, result.link, etc. */}
          </div>
        ))
      ) : (
        <p className={styles.noResultsMessage}>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;