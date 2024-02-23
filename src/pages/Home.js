// import { useNavigate } from "react-router-dom"

import { Await, defer, json, useLoaderData } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHeart,
  faSquarePlus,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import classes from "../components/MainPage.module.css";
import styles from "./Home.module.css";
import SearchBar from "../components/SearchBar";
import NewsItem from "../components/News";
import { publicApi } from "../util/http";
import Clock from "../components/Clock";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const popularPosts = ["인기 게시글 1", "인기 게시글 2", "인기 게시글 3"];
  const interestedPosts = ["관심 게시글 1", "관심 게시글 2", "관심 게시글 3"];
  const recentPosts = ["최신 게시글 1", "최신 게시글 2", "최신 게시글 3"];
  const hashtags = [
    "#해시태그1 게시판",
    "#해시태그2 게시판",
    "#해시태그3 게시판",
    "#해시태그4 게시판",
  ];

  return (
    <div className={classes.mainPage}>
      <SearchBar />
      {/* <div className={classes.title}>오늘 아껴볼 시간은?</div> */}
      {/* Content wrapper added to ensure content pushes footer down */}
      <div className={classes.contentWrapper}>
        <div className={classes.sectionsContainer}>
          <div className={classes.section}>
            <div className={classes.section_header}>
              <span className={classes.section_title}>
                <FontAwesomeIcon
                  icon={faFire}
                  style={{ marginRight: "0.5rem" }}
                />
                인기글
              </span>
              <span className={classes.see_more}>더보기</span>
            </div>
            {popularPosts.map((post, index) => (
              <NewsItem key={index} title={post} />
            ))}
          </div>
          <div className={classes.section_clock}>
            <div class={styles.card}>
              <div class={styles["card-details"]}>
                <div class={styles["text-title"]}>Save</div>
                <div class={styles["text-title"]}>Your</div>
                <div class={styles["text-title"]}>Time</div>
              </div>
              <button class={styles["card-button"]}>Get start</button>
              <Clock />
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.section_header}>
              <span className={classes.section_title}>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  style={{ marginRight: "0.5rem" }}
                />
                최신글
              </span>
              <span className={classes.see_more}>더보기</span>
            </div>
            {recentPosts.map((post, index) => (
              <NewsItem key={index} title={post} />
            ))}
          </div>
          <div className={classes.section}>
            <div className={classes.section_header}>
              <span className={classes.section_title}>
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  style={{ marginRight: "0.5rem" }}
                />
                카테고리
              </span>
              <span className={classes.see_more}>더보기</span>
            </div>
            <ul>
              {hashtags.map((post, index) => (
                <NewsItem key={index} title={post} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <>
  //     {/* <p>여기는 Moc 페이지 입니다.</p>
  //     {isLoggedIn && <MyInput />}
  //     <Link to="/write">write 페이지 가기!</Link>
  //     <Link to="/MainPage"> main page 로 이동하기</Link>
  //     <Link to="/MyPage"> 개인 정보 확인하기 </Link>
  //     <Link to="/PostPage"> 작성된 게시글의 제목입니다. </Link> */}

  //   </>
  // );
};

export default HomePage;

async function getPopularContents() {
  const response = await publicApi.get("posts/popular/yesterday/");
  return response.data;
}
async function getRecentContent() {
  const response = await publicApi.get("posts/like/0/");
  return response.postList;
}

export const loader = () => {
  return defer({
    popular: getPopularContents(),
    recent: getRecentContent(),
  });
};
