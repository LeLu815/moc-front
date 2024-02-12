// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { LoginBtn } from "./LoginBtn";
import { kakaoAccessFunc } from "../util/kakoAuth";
import { userAction } from "../store/user-slice";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  // 리덕스 값이 변하면 랜더링이 다시되나? 예

  const handleLogin = () => {
    kakaoAccessFunc();
  };
  const handleLogout = () => {
    // 토큰 삭제하기
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(userAction.logoutUsrData());
  };

  return (
    <>
      {!isLoggedIn && (
        <div>
          <LoginBtn onClick={handleLogin} />
        </div>
      )}
      {isLoggedIn && (
        <div>
          <span>{user.nickname}님 안녕하세요!</span>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </>
  );
};

export default Header;
