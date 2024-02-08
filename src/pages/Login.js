import { LoginBtn } from "../components/LoginBtn";

const LoginPage = () => {
  const handleLogin = () => {
    console.log("로그인 해볼까?");
  };
  return <LoginBtn onClick={handleLogin} />;
};

export default LoginPage;
