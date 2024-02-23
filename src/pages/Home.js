// import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import MyInput from "../components/MyInput";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
    <Header></Header>
      <p>여기는 Moc 페이지 입니다.</p>
      {isLoggedIn && <MyInput />}
      <Link to="/write">write 페이지 가기!</Link>
      <Link to="/MainPage"> main page 로 이동하기</Link>
      <Link to="/MyPage">   개인 정보 확인하기   </Link>
      <Link to="/PostPage"> 작성된 게시글의 제목입니다. </Link>
      <Link to="/PopularPostPage">View Popular Posts</Link>
    </>
  );
};

export default HomePage;

