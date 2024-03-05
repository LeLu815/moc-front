import { Await, defer, json, redirect, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import PopularList from "../components/PopularPostsList";
import styles from "./PopularPost.module.css"; // Create this module CSS file for styling
import { publicApi } from "../util/http";
import CateNav from "../components/CateNav";

const popularPosts = [
  {
    title: "리액트 마스터로의 여정",
    excerpt:
      "리액트의 깊은 곳으로 함께 떠나보며, 최신 기능들을 효과적으로 프로젝트에 어떻게 활용하는지 탐험해봅시다.",
    likes: 150,
    comments: 23,
    date: "2024-02-20",
  },
  {
    title: "Understanding Redux in Modern Applications",
    excerpt:
      "A comprehensive guide to managing state in your applications with Redux, complete with real-world examples.",
    likes: 99,
    comments: 42,
    date: "2024-02-18",
  },
  {
    title: "Next.js vs. Create React App: Which Should You Choose?",
    excerpt:
      "Comparing Next.js and Create React App for building your React projects. We discuss the pros and cons of each to help you decide.",
    likes: 75,
    comments: 30,
    date: "2024-02-15",
  },
  // Add more posts as needed
];
const cateNameObj = {
  0: "꽝!",
  1: "공부",
  2: "운동",
  3: "부동산",
  4: "주식/투자",
  5: "여행",
  6: "취미생활",
  7: "쇼핑/패션",
  8: "음식/요리",
  9: "맛집",
  10: "자기개발",
  11: "영화/드라마",
  12: "독서",
  13: "음악",
};
const PopularPostPage = () => {
  const { postsList, id } = useLoaderData();

  console.log(postsList);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{cateNameObj[id]} 게시판</h1>
      </header>
      <div className={styles.cate_nave}>
        {Object.keys(cateNameObj).map((value, index) => {
          if (index === 0) {
            return;
          }
          return <CateNav id={value} name={cateNameObj[value]} />;
        })}
      </div>
      <Suspense>
        <Await resolve={postsList}>
          <PopularList posts={postsList} />
          {/* <PopularList posts={popularPosts} /> */}
        </Await>
      </Suspense>
    </div>
  );
};

export default PopularPostPage;

async function loadPostsList(id) {
  const response = await publicApi.get(`posts/list/${id}/?page=1`);
  return response.data.postList;
  // try {
  //   const response = await publicApi.get(`posts/list/${id}/?page=1`);
  //   return response.data.postList;
  // } catch (error) {
  //   console.log("error :", error);
  //   throw new Response("Not Found", { status: 404 });
  // }

  // try {
  //   const response = await publicApi.get(`posts/list/${id}/?page=1`);
  //   // console.log(response.data.postList);
  //   // if (response.status === 404) {
  //   //   console.log("404");
  //   //   throw json({ status: "404" });
  //   // }
  //   return response.data.postList;
  // } catch (error) {
  //   if (error.response.status === 404) {
  //     console.log("404");
  //     // throw err
  //     throw new Response("Not Found", { status: 404 });
  //   }
  //   return error;
  // }
}

export const loader = async ({ params }) => {
  const id = params.cateId;
  const response = await publicApi.get(`posts/list/${id}/?page=1`);
  return { postsList: response.data.postList, id };
  // return defer({
  //   postsList: loadPostsList(id),
  //   id,
  // });
};
