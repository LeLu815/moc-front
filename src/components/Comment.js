import { useState } from "react";

import classes from "./Comment.module.css";
import { privateApi } from "../util/http";
import Loading from "./style/Loading/Loading";

const Comment = ({ comment, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  const date = new Date(comment.created_at);

  const handleDeleteComment = async () => {
    setDeleteError(false);
    setIsLoading(true);
    try {
      const response = await privateApi.delete(
        `comments/delete/${comment.id}/`
      );
      setIsLoading(false);
      setIsDeleted(true);
    } catch (error) {
      setIsLoading(false);
      setDeleteError(true);
    }
  };

  return (
    !isDeleted && (
      <div
        key={comment.id}
        className={`${classes.comment} ${
          deleteError ? classes.delete_fail : ""
        }`}
      >
        <div className={classes.comment_title}>
          <span className={classes.comment_user}>user{comment.user}</span>
          <span className={classes.comment_writer}>
            {user && comment.user === user.id && "작성자"}
          </span>
        </div>
        <div className={classes.comment_body}>{comment.body}</div>
        <div className={classes.comment_info}>
          <span
            className={classes.comment_time}
          >{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</span>
          {isLoading ? (
            <Loading />
          ) : (
            <span
              className={classes.comment_delete}
              onClick={handleDeleteComment}
            >
              {user && comment.user === user.id && "삭제"}
            </span>
          )}
        </div>
        {deleteError && (
          <div className={classes.delete_fail_text}>
            댓글 삭제에 실패했습니다.
          </div>
        )}
      </div>
    )
  );
};

export default Comment;
