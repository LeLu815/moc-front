import { LoginBtn } from "../components/LoginBtn";

import { kakaoAccessFunc, getKakaoToken } from "../util/kakoAuth";

const LoginPage = () => {
  const handleLogin = () => {
    kakaoAccessFunc();
  };
  return <LoginBtn onClick={handleLogin} />;
};

export default LoginPage;
