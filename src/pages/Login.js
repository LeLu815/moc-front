import { LoginBtn } from "../components/LoginBtn";

import { kakaoAccessFunc, getKakaoToken } from "../util/kakoAuth";

const LoginPage = () => {
  const handleLogin = () => {
    console.log("로그인 해볼까?");
    kakaoAccessFunc();
  };
  return <LoginBtn onClick={handleLogin} />;
};

export default LoginPage;
