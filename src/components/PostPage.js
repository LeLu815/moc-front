import { json, useLoaderData, useNavigate } from "react-router-dom";

import { publicApi } from "../util/http";
import classes from "./PostPage.module.css";

const postDetails = {
  title: "작성된 게시글의 제목입니다.",
  author: "작성자",
  timestamp: "2023.04.23.",
  views: 15,
  comments: 10,
  tags: ["#해시태그1", "#해시태그2", "#해시태그3"],
  imageUrl: "path_to_image.jpg",
};
const comments = [
  { id: 1, text: "댓글1" },
  { id: 2, text: "댓글2" },
  { id: 3, text: "댓글3" },
];

const PostPage = () => {
  const navigate = useNavigate();
  const handleErrorClick = () => {
    return navigate(-1);
  };
  const loaderData = useLoaderData();

  console.log("loaderData :", loaderData);

  return (
    <div className={classes.page}>
      {loaderData.name && loaderData.name === "AxiosError" && (
        <div className={classes.error_container}>
          <div className={classes.error_box}>
            <div className={classes.error_title}>게시글 오류</div>
            <div className={classes.error_text}>
              존재하지 않는 게시물입니다.
            </div>
            <div className={classes.error_btn} onClick={handleErrorClick}>
              돌아가기
            </div>
          </div>
        </div>
      )}
      <div className={classes.postContainer}>
        <h1>{postDetails.title}</h1>
        <div className={classes.postMeta}>
          <span>{postDetails.author}</span>
          <span>{postDetails.timestamp}</span>
          <span>조회 {postDetails.views}</span>
          <span>댓글 {postDetails.comments}</span>
        </div>
        <div className={classes.postContent}>
          {postDetails.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <img src={postDetails.imageUrl} alt="Post" />
        </div>
        <div className={classes.comments}>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              {comment.text}
            </div>
          ))}
        </div>
        <div className={classes.commentForm}>
          <input type="text" placeholder="댓글을 작성하세요" />
          <button>댓글 작성</button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export const loader = async ({ request, params }) => {
  const id = params.postId;
  try {
    const response = await publicApi.get(`/posts/detail/${id}/`);
    console.log("로더 리스폰스 :", response);
    return { data: response.data.data };
  } catch (error) {
    console.log("로더 에러 :", error);
    return error;
  }
};
