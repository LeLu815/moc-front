import React, { useEffect } from "react";
import {
  useNavigate,
  defer,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import { privateApi } from "../util/http.js";

import classes from "./write.module.css";
import WritingArea from "./WritingArea.js";
import Advertisement from "./Advertisement.js";
import Footer from "./Footer";

const Write = () => {
  const navitate = useNavigate();
  const { isLogin } = useRouteLoaderData("write");

  useEffect(() => {
    if (!isLogin) {
      navitate("/login");
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.writeContainer}>
        <h1 className={classes.title}>글쓰기</h1>
        <WritingArea method="post" />
      </div>
    </div>
  );
};

export default Write;

export const getIsLogin = async () => {
  try {
    const response = await privateApi.get("accounts/mypage/");
    if (response.ok) {
      return { isLogin: true };
    }
    return { isLogin: false };
  } catch (error) {
    return { isLogin: false };
  }
};

export const loader = () => {
  const isLoggedIn = localStorage.getItem("user");
  if (!isLoggedIn) {
    return { isLogin: false };
  } else {
    return defer({
      isLogin: getIsLogin(),
    });
  }
};

export async function action({ params, request }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    body: data.get("body"),
    cateId: data.get("cateId"),
  };
  console.log("eventData :", params, request, data);

  return redirect("/");
}
