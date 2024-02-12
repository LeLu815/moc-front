import { useLoaderData, defer, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";

import { getKakaoToken, sendKaKaoToken } from "../util/kakoAuth";
import { userAction } from "../store/user-slice";
import { saveToken } from "../reactQuery/Auth";

const KakaoTokenPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 유저데이터, 엑세스, 리프레시 토큰이 넘어온다.
  const { okay } = useLoaderData("kakao-token");
  const { accesMutate } = useMutation({
    queryKey: ["acceseToken"],
    mutationFn: saveToken,
  });
  const { refreshMutate } = useMutation({
    queryKey: ["refreshToken"],
    mutationFn: saveToken,
  });
  useEffect(() => {
    if (okay.result) {
      const { user } = okay;

      // 위애서 받은 데이터들을 리덕스의 유저 객체에 던져준다.
      dispatch(userAction.loginUserData({ user }));
      console.log();
      // 받은 토큰은 리액트 쿼리에 키로 등록하고 관리해준다.
      // 엑세스 토큰과 리프레쉬 토큰은 별도의 쿼리키로 관리되어야 한다.
      // 각각 스테일 타임과 케시 타임이 다르고 업데이트 되는 함수도 달랴야 한다.
      accesMutate();
      refreshMutate();

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
  // 여기서 백엔드에게 토큰을 넘겨주면 결과 값은 엑세스 토큰이랑 리프레시 토큰이랑 유저 데이터가 넘어올까?
  return defer({
    okay: await sendKaKaoToken(token),
  });
}
