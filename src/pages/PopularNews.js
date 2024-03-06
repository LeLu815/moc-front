import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import PopularList from "../components/PopularPostsList";
import styles from "./PopularPost.module.css"; // Create this module CSS file for styling
import { publicApi } from "../util/http";
import Loading from "../components/style/Loading/Loading";

const PopularNews = () => {
  const { postsList, pageName } = useLoaderData();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{pageName === "popular" ? "인기글" : "최신글"}</h1>
      </header>
      {/* <div className={styles.cate_nave}>
        {Object.keys(cateNameObj).map((value, index) => {
          if (index === 0) {
            return;
          }
          return <CateNav id={value} name={cateNameObj[value]} />;
        })}
      </div> */}
      <Suspense fallback={<Loading />}>
        <Await resolve={postsList}>
          {postsList.length === 0 ? (
            <>
              <div>아직 게시글이 없습니다. 좋아요를 눌러주세요!</div>
              <div>
                <button>다른 게시글 보기</button>
              </div>
            </>
          ) : (
            <PopularList posts={postsList} />
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default PopularNews;

// async function loadPostsList(id) {
//   const response = await publicApi.get(`posts/popular/yesterday/`);
//   return response.data;
// }

export const loader = async ({ request, params }) => {
  const urlList = request.url.split("/");
  const pageName = urlList[`${urlList.length - 2}`];

  console.log("pageName :", pageName);
  if (pageName === "popular") {
    try {
      const response = await publicApi.get(`daily/popular/yesterday/`);
      return { postsList: response.data, pageName };
    } catch {
      return { postsList: [], pageName };
    }
  }

  // return { postsList: response.data, id };
  // return defer({
  //   postsList: loadPostsList(id),
  //   id,
  // });
};
