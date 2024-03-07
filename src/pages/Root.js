import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useQuery } from "@tanstack/react-query";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { userAction } from "../store/user-slice";
import Advertisement from "../components/style/Advertisement";

const RootPage = () => {
  const dispatch = useDispatch();
  const {
    user,
    // token: { accese, refresh },
  } = useLoaderData("root");

  // useEffect로 최초로 바꿔주기
  useEffect(() => {
    if (user) {
      dispatch(userAction.replaceUserData({ user, isLoggedIn: true }));
    } else {
      dispatch(userAction.replaceUserData({ user, isLoggedIn: false }));
    }
  }, [user]);

  return (
    <>
      <Header />
      <Advertisement />
      <main style={{ paddingTop: "3em", maxWidth: "1140px", margin: "0 auto" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootPage;
