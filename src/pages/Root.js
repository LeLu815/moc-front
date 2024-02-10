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
  } = useLoaderData();
  // useEffect로 최초로 바꿔주기
  useEffect(() => {
    dispatch(userAction.replaceUserData({ user, token: { accese, refresh } }));
  }, []);

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
