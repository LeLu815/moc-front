import { useLoaderData, defer, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getKakaoToken, sendKaKaoToken } from "../util/kakoAuth";
import { userAction } from "../store/user-slice";

const KakaoTokenPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 유저데이터, 엑세스, 리프레시 토큰이 넘어온다.
  const { okay } = useLoaderData("kakao-token");
  useEffect(() => {
    if (okay.result) {
      const { user } = okay;
      // 위애서 받은 데이터들을 리덕스의 유저 객체에 던져준다.
      dispatch(userAction.loginUserData(user));
      // 받은 토큰은 리액트 쿼리에 키로 등록하고 관리해준다.
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <p>카카오 로그인을 위한 토큰이 받아지는 임시 페이지 입니다.</p>
    </div>
  );
};

export default KakaoTokenPage;

export async function loader({ request, params }) {
  const token = getKakaoToken();
  console.log(token);
  // 여기서 백엔드에게 토큰을 넘겨주면 결과 값은 엑세스 토큰이랑 리프레시 토큰이랑 유저 데이터가 넘어올까?
  return defer({
    okay: await sendKaKaoToken(),
  });
}
