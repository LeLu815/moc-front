import {
  json,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";

import { publicApi } from "../util/http";
import classes from "./PostPage.module.css";
import PostComment from "./PostComment";

const postDetails = {
  title: "작성된 게시글의 제목입니다.",
  author: "작성자",
  timestamp: "2023.04.23.",
  comments: 10,
  tags: ["#해시태그1", "#해시태그2", "#해시태그3"],
  body: "작성된 게시글의 내용입니다. 수필(隨筆) 또는 경수필(輕隨筆, miscellany)은 일정한 형식을 따르지 않고 가볍게는 일상적인 느낌이나 체험[1]을 생각나는 대로, 자유롭게 쓰는 산문 형식의 문학을 가리킨다. 가벼운 잡기를 자유롭게 서술하는 경수필에 대비하여 사회적 주제 또는 철학적 사색 등을 무거운 논조를 통해 논리적, 객관적으로 서술하는 글은 중수필(重隨筆)이라고 한다.",
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
  const { user } = useRouteLoaderData("root");
  const loaderData = useLoaderData();
  const dataObj = new Date(loaderData.data.created_at);
  const dateFormating = `${dataObj.getFullYear()}-${dataObj.getMonth()}-${dataObj.getDate()}`;

  console.log("loaderData :", loaderData, user);

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
        <h1>{loaderData.data ? loaderData.data.title : postDetails.title}</h1>
        <div className={classes.postMeta}>
          <div className={classes.offical_postMeta}>
            <span>
              {loaderData.data
                ? `user_${loaderData.data.user}`
                : postDetails.author}
            </span>
            <span>
              {loaderData.data ? dateFormating : postDetails.timestamp}
            </span>
            <span>
              {loaderData.data
                ? `댓글 ${loaderData.data.comments.length}`
                : `댓글 ${postDetails.comments}`}
            </span>
          </div>
          <div className={classes.private_postMeta}>
            {loaderData.data && loaderData.data.user === user.id && (
              <>
                <button type="button">수정</button>
                <button type="button">삭제</button>
              </>
            )}
          </div>
        </div>
        <div className={classes.postContent}>
          <div className={classes.postContent_hash}>
            {loaderData.data
              ? loaderData.data.hashtags.map((tag) => (
                  <span key={tag.id}>{`#${tag.tags}`}</span>
                ))
              : postDetails.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className={classes.postContent_body}>
            {loaderData.data ? loaderData.data.body : postDetails.body}
          </div>
          <div className={classes.postContent_img}>
            {loaderData.data &&
              loaderData.data.image.length !== 0 &&
              loaderData.data.image.map((url) => (
                <img key={url.id} src={url.image} alt="이미지 사진" />
              ))}
          </div>
        </div>
      </div>
      <PostComment
        comments={loaderData.data ? loaderData.data.comments : false}
      />
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
