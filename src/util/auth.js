import { redirect } from "react-router-dom";
import axios from "axios";

export function getAuthToken() {
  const token = sessionStorage.getItem("token");
  const refresh = localStorage.getItem("token");
  if (!token && !refresh) {
    return { accese: null, refresh: null };
  }
  return { accese: token, refresh };
}

export function getUserFromLocal() {
  const stringUser = localStorage.getItem("user");
  const user = JSON.parse(stringUser);
  console.log("getUserFromLocal :", user, Boolean(user));
  if (!user) {
    return null;
  }
  return user;
}

export function defaultLoader() {
  const { accese, refresh } = getAuthToken();
  const user = getUserFromLocal();

  console.log("defaultLoader :", user);
  return { user, token: { accese, refresh } };
}

export function checkAuthLoader() {
  const { accese, refresh } = getAuthToken();

  if (!accese && !refresh) {
    return redirect("/login");
  }

  return null;
}

//토큰이 불필요한 경우
export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
});

//토큰을 함께 보내는 instance
export const privateApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

//리프레시토큰 요청 api
function postRefreshToken() {
  // 여기서 url을 변경해줘야 한다.
  const response = publicApi.post("/api/v1/auth/refresh", {
    refreshToken: localStorage.getItem("refreshToken"),
  });
  return response;
}
