import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import RootPage from './pages/Root';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import PopularPostsPage from './pages/PopularPosts';

import KakaoTokenPage, { loader as tokenLoader } from './pages/KakaoToken';
import { defaultLoader } from './util/auth';
import Write from './components/write';
import MainPage from './components/MainPage';
import MyPage from './components/MyPage';
import PostPage from './components/PostPage';


export const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: "root",
    loader: defaultLoader,
    children: [
      { index: true, 
        element: <HomePage /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/login/token',
        element: <KakaoTokenPage />,
        loader: tokenLoader,
      },
      {
        path: '/write',
        element: <Write />
      },
      {
        path: "/Mainpage",
        element: <MainPage />
      },
      {
        path: "/Mypage",
        element: <MyPage />
      }
      ,
      {
        path: "/PostPage",
        element: <PostPage />
      },
      {
        path: "/PopularPosts",
        element:<PopularPostsPage/>
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
