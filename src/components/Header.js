import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { userAction } from "../store/user-slice";
import { Link } from "react-router-dom";
import { privateApi } from "../util/http";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        dispatch(userAction.logoutUsrData());
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Link className={styles.logo} to="/">
          <span className={styles.logo_box}>M</span>
          MoC
        </Link>
        {location.pathname.indexOf("/login") === -1 && <HeaderNav />}
        <div className={styles.info_div}>
          <button className={`${styles.button_login}`} onClick={() => {}}>
            글쓰기
          </button>
          {!isLoggedIn && (
            <button
              className={`${styles.button}`}
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </button>
          )}
          {isLoggedIn && (
            <>
              {/* <span>{user.nickname}님 안녕하세요!</span> */}
              <button className={`${styles.button}`} onClick={() => {}}>
                내정보
              </button>
              <button className={`${styles.button}`} onClick={handleLogout}>
                로그아웃
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
