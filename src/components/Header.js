// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { LoginBtn } from "./LoginBtn";
import { kakaoAccessFunc } from "../util/kakoAuth";

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);

  const handleLogin = () => {
    kakaoAccessFunc();
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
          <button>로그아웃</button>
        </div>
      )}
    </>
  );
};

export default Header;
