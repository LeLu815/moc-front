import { useState, useRef } from "react";
import { privateApi } from "../util/http";
import { useNavigate } from "react-router-dom";

import classes from "./PostPage.module.css";
import styles from "./PostComment.module.css";

const PostComment = (props) => {
  const [isError, setIsError] = useState(true);
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleClickLikes = () => {
    ref.current.click();
  };

  const comment = props.comments;
  console.log("comment :", comment);

  return (
    <>
      {isError && (
        <div className={styles.error_container}>
          <div className={styles.error_card}>
            <div className={styles.error_info}>
              <span className={styles.error_title}>
                게시글이 마음에 드시나요?
              </span>
              <span className={styles.error_kor}>
                로그인하여 의견을 알려주세요.
              </span>
              <span className={styles.error_en}>
                Don’t Waste a Single Second : Time-Efficient Society
              </span>
            </div>
            <div className={styles.error_btn_section}>
              <button
                type="button"
                className={styles.error_btn}
                onClick={() => {
                  setIsError(false);
                }}
              >
                취소
              </button>
              <button
                type="button"
                className={styles.error_btn}
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={classes.commentForm}>
        <div className={classes.commet_info}>
          <div className={classes.like_section} onClick={handleClickLikes}>
            <div className={styles["con-like"]}>
              <input
                className={styles.like}
                type="checkbox"
                title="like"
                ref={ref}
                onClick={handleClickLikes}
              />
              <div className={styles.checkmark}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.outline}
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.filled}
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100"
                  width="100"
                  className={styles.celebrate}
                >
                  <polygon
                    className={styles.poly}
                    points="10,10 20,20"
                  ></polygon>
                  <polygon
                    className={styles.poly}
                    points="10,50 20,50"
                  ></polygon>
                  <polygon
                    className={styles.poly}
                    points="20,80 30,70"
                  ></polygon>
                  <polygon
                    className={styles.poly}
                    points="90,10 80,20"
                  ></polygon>
                  <polygon
                    className={styles.poly}
                    points="90,50 80,50"
                  ></polygon>
                  <polygon
                    className={styles.poly}
                    points="80,80 70,70"
                  ></polygon>
                </svg>
              </div>
            </div>
            <span className={classes.like_text}>좋아요</span>
          </div>
          <div>댓글 {comment ? comment.length : 0}</div>
        </div>
        <div className={classes.commet_input_container}>
          <input type="text" placeholder="댓글을 작성하세요" />
          <button type="submit">댓글 작성</button>
        </div>
      </div>
      <div className={classes.comments}>
        {comment &&
          comment.map((comment) => (
            <div key={comment.id} className={classes.comment}>
              {comment.text}
            </div>
          ))}
      </div>
    </>
  );
};

export default PostComment;
