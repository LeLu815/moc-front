import { useNavigate } from "react-router-dom";
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
  const navitate = useNavigate();
  const { popular, recent } = useLoaderData();

  const hashtags = ["공부", "운동", "부동산", "주식/투자", "여행"];

  return (
    <div className={classes.mainPage}>
      <SearchBar />
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
              <span
                className={classes.see_more}
                onClick={() => navitate("/posts/popular/")}
              >
                더보기
              </span>
            </div>
            <Suspense
              fallback={<p style={{ texeAlign: "center" }}>Loading...</p>}
            >
              <Await resolve={popular}>
                {(loadedEvents) => {
                  return loadedEvents
                    .slice(0, 6)
                    .map((event) => (
                      <NewsItem
                        key={event.id}
                        title={event.title}
                        date={event.created_at}
                        detailId={event.id}
                      />
                    ));
                }}
              </Await>
            </Suspense>
          </div>
          <div className={classes.section_clock}>
            <div className={styles.card}>
              <div className={styles["card-details"]}>
                <div className={styles["text-title"]}>Save</div>
                <div className={styles["text-title"]}>Your</div>
                <div className={styles["text-title"]}>Time</div>
              </div>
              <button
                className={styles["card-button"]}
                onClick={() => {
                  navitate("/login");
                }}
              >
                Get start
              </button>
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
            <Suspense
              fallback={<p style={{ texeAlign: "center" }}>Loading...</p>}
            >
              <Await resolve={recent}>
                {(loadedEvents) => {
                  return loadedEvents
                    .slice(0, 5)
                    .map((event) => (
                      <NewsItem
                        key={event.id}
                        title={event.title}
                        date={event.created_at}
                        detailId={event.id}
                      />
                    ));
                }}
              </Await>
            </Suspense>
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
              <span
                className={classes.see_more}
                onClick={() => {
                  navitate("/posts/list/");
                }}
              >
                더보기
              </span>
            </div>
            <ul>
              {hashtags.map((post, index) => (
                <NewsItem key={index} title={post} id={index + 1} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

async function getPopularContents() {
  const response = await publicApi.get("posts/list/1/");
  return response.data.postList;
}
async function getRecentContent() {
  const response = await publicApi.get("posts/list/0/");
  return response.data.postList;
}

export const loader = () => {
  return defer({
    popular: getPopularContents(),
    recent: getRecentContent(),
  });
};
