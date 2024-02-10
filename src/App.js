import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import KakaoTokenPage, { loader as tokenLoader } from "./pages/KakaoToken";
import { defaultLoader } from "./util/auth";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    id: "root",
    loader: defaultLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/login/token",
        id: "kakao-token",
        element: <KakaoTokenPage />,
        loader: tokenLoader,
      },
    ],
  },
]);

function App() {
  // const REACT_APP_KAKAOLOGIN = process.env.REACT_APP_KAKAOLOGIN_APPKEY;
  // const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  // const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_APPKEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  // const getKakaoLogin = async () => {
  //   console.log(REACT_APP_KAKAOLOGIN, REACT_APP_REDIRECT_URI);
  //   window.location.href = link;
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
