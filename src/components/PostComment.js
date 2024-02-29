import { useState } from "react";
import classes from "./PostPage.module.css";

const PostComment = (props) => {
  const comment = props.comments;

  return (
    <>
      <div className={classes.commentForm}>
        <input type="text" placeholder="댓글을 작성하세요" />
        <button type="submit">댓글 작성</button>
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
