import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  const refresh = localStorage.getItem("refresh_token");
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

// export const logoutToken = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.REACT_APP_SERVER_IP}accounts/token/logout/`
//     );
//     if (response.ok) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }
// };
