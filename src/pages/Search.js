import { useState, useEffect } from "react";
import { useActionData, useFetcher } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import PopularPostsList from "../components/PopularPostsList";

const SearchPage = () => {
  const results = useActionData();
  console.log("results :", results);

  return (
    <div style={{ height: "90vh" }}>
      <SearchBar />
      <div style={{ marginTop: "4rem" }}>
        {results ? (
          <PopularPostsList posts={results ? results : []} />
        ) : (
          <p style={{ textAlign: "center" }}>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
