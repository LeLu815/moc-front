import { useState } from "react";

import styles from "./MyInput.module.css";
import { publicApi, privateApi } from "../util/http";

const MyInput = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await privateApi.post(`posts/create/1/`, {
        title: title,
        body: content,
        hashtags: ["영어", "일본어"],
      });
      setContent("");
      setErrorMsg("");
    } catch (error) {
      console.log(error);
      setErrorMsg("생성 오류! 다시 시도해주세요!");
    }
  };
  return (
    <>
      <h2 style={{ color: "red" }}>{errorMsg !== "" && errorMsg}</h2>
      <div className={styles.container}>
        <div className={styles.heading}>글쓰기</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            required
            className={styles["input"]}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            required
            className={styles.input}
            type="text"
            name="content"
            id="content"
            placeholder="Tell your story"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <input
            className={styles["login-button"]}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};
export default MyInput;
