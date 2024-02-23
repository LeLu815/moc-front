import { useSelector, useDispatch } from "react-redux";

import { userAction } from "../store/user-slice";
import { Link } from "react-router-dom";
import { privateApi } from "../util/http";
// import { logoutToken } from "../util/auth";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  // 리덕스 값이 변하면 랜더링이 다시되나? 예
  const handleLogout = async () => {
    // 토큰 삭제하기
    try {
      const response = await privateApi.post("accounts/token/logout/", {
        refresh: localStorage.removeItem("refresh_token"),
      });
      if (response) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        dispatch(userAction.logoutUsrData());
      } else {
        // 로그아웃이 안됨
      }
    } catch (error) {
      // console.log(
      //   "error :",
      //   error.response.status,
      //   typeof error.response.status
      // );
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        dispatch(userAction.logoutUsrData());
      }
    }
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
