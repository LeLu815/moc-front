import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = sessionStorage.getItem("token");
  const refresh = localStorage.getItem("token");
  if (!token && !refresh) {
    return { accese: null, refresh: null };
  }
  return { accese: token, refresh };
}

export function getUserFromLocal() {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }
  return user;
}

export function defaultLoader() {
  const { accese, refresh } = getAuthToken();
  const user = getUserFromLocal();

  return { user, token: { accese, refresh } };
}

export function checkAuthLoader() {
  const { accese, refresh } = getAuthToken();

  if (!accese && !refresh) {
    return redirect("/login");
  }

  return null;
}
