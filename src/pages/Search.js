import { useState, useEffect } from "react";
import { useActionData, useFetcher } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
  const results = useActionData();
  console.log("results :", results);

  return (
    <div style={{ height: "90vh" }}>
      <SearchBar />
      <SearchResults results={results ? results : []} />
    </div>
  );
};

export default SearchPage;
