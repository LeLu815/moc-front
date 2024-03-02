import { useState, useRef } from "react";
import { privateApi } from "../util/http";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./PostPage.module.css";
import styles from "./PostComment.module.css";
import Loading from "./style/Loading/Loading";

const sendPostLikes = async (id) => {
  try {
    const response = await privateApi.get(`posts/like/${id}/`);
    console.log(response);
  } catch (error) {
    console.log("like error :", error);
  }
};

const PostComment = (props) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [newCommentsList, setNewCommentsList] = useState(null);
  const [inputError, setInputError] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);

  const { comments, postId, likedList } = props;
  console.log("postId :", comments, postId, likedList, user);
  console.log("newCommentsList :", newCommentsList);

  const handleClickLikes = (e) => {
    if (!isLoggedIn) {
      setIsError(true);
    } else {
      ref.current.click();
      if (postId) {
        try {
          sendPostLikes(postId);
        } catch (error) {}
      } else {
        setIsError(true);
      }
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (commentText.length === 0) {
      return;
    }
    setIsLoading(true);
    try {
      // 여기서 생성된 댓글들은 로더 함수에서 넘어오는 인수로는 잡히지 않는다 따라서 내가 useState로 성공 메세지를 받으면 직접 업데이트 해주는 방법이 있다. (아님)
      // 응답 데이터가 해당 게시글 전체 데이터구나...
      const response = await privateApi.post(`comments/create/${postId}/`, {
        body: commentText,
      });
      const commentDataList = response.data.comments;
      setNewCommentsList(commentDataList);
      setCommentText("");
      setInputError(false);

      setIsLoading(false);
    } catch (error) {
      console.log("error :", error);
      setInputError(true);
      setIsLoading(false);
    }
  };

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
          <div className={classes.like_section}>
            <div
              className={classes.like_section_cover}
              onClick={handleClickLikes}
            ></div>
            <div className={styles["con-like"]}>
              <input
                className={styles.like}
                type="checkbox"
                title="like"
                ref={ref}
                defaultChecked={user && likedList.indexOf(user.id) !== -1}
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
          <div>댓글 {comments ? comments.length : 0}</div>
        </div>
        <div className={classes.error_input_msg}>
          {inputError && "댓글 생성 오류"}
        </div>
        <form
          className={classes.commet_input_container}
          onSubmit={handleSubmitComment}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <input
                name="commentBody"
                type="text"
                value={commentText}
                className={inputError ? classes.error_input : ""}
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
                placeholder="댓글을 작성하세요"
              />
              <button type="submit" disabled={commentText.length === 0}>
                댓글 작성
              </button>
            </>
          )}
        </form>
      </div>
      <div className={classes.comments}>
        {newCommentsList
          ? newCommentsList.map((comment) => (
              <div key={comment.id} className={classes.comment}>
                {comment.text}
              </div>
            ))
          : comments &&
            comments.map((comment) => (
              <div key={comment.id} className={classes.comment}>
                <div className={classes}>
                  <span className={classes}>user{comment.user}</span>
                  <span className={classes}>
                    {comment.user === user.id && "작성자"}
                  </span>
                </div>
                <div className={classes}>{comment.body}</div>
                <div className={classes}>
                  <span>{comment.created_at}</span>
                  <span></span>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default PostComment;
