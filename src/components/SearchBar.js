import { Form } from "react-router-dom";

import classes from "./SearchBar.module.css";
import { publicApi } from "../util/http";

const SearchBar = () => {
  return (
    <Form className={classes.searchBarContainer} method="POST" action="/search">
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="검색하고 싶은 내용을 입력하세요"
          name="searchTerm"
          id="searchTerm"
        />
        <button type="submit">🔍</button>
      </div>
    </Form>
  );
};

export default SearchBar;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const dataList = data.get("searchTerm").split(" ");

  const response = await publicApi.post("posts/search/words/?page=1", {
    word_list: dataList,
  });
  console.log("response :", response);
  const responseData = response ? response.data.postList : "";
  return responseData;
};
