import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import { userAction } from "../store/user-slice";

const RootPage = () => {
  const dispatch = useDispatch();
  const {
    user,
    token: { accese, refresh },
  } = useLoaderData("root");
  // useEffect로 최초로 바꿔주기
  // 리액트 쿼리로 토큰을 저장해야 한다.
  console.log("RootPage :", user);
  useEffect(() => {
    if (user) {
      console.log("RootPage-yes :", user);
      dispatch(userAction.replaceUserData({ user, isLoggedIn: true }));
    } else {
      console.log("RootPage-no :", user);
      dispatch(userAction.replaceUserData({ user, isLoggedIn: false }));
    }
  }, [user]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
