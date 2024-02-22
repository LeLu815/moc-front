// import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom";

import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <p>여기는 Moc 페이지 입니다.</p>
      <Link to="/write">write 페이지 가기!</Link>
      <Link to="/MainPage"> main page 로 이동하기</Link>
    </>
  );
};

export default HomePage;
