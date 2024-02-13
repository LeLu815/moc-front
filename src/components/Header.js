// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { userAction } from "../store/user-slice";
import { Link } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  // 리덕스 값이 변하면 랜더링이 다시되나? 예
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
          {/* <LoginBtn onClick={handleLogin} /> */}
          <Link to="/login">로그인하러가기</Link>
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
