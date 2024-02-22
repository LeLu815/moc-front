// import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import MyInput from "../components/MyInput";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <p>여기는 Moc 페이지 입니다.</p>
      {isLoggedIn && <MyInput />}
    </>
  );
};

export default HomePage;
