// 카카오 auth AUTHORIZE_CODE 받기

import { redirect } from "react-router-dom";

// 리다이렉션 url로 보낸다음 엑세스 토큰 받기
export const kakaoAccessFunc = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_APPKEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  window.location.href = link;
};

// 토큰 받는 함수를 라우터 로더 함수에 넣기
export const getKakaoToken = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  return code;
};

export const sendKaKaoToken = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_IP}accounts/kakao/login/${token}/`
      // `${process.env.REACT_APP_SERVER_IP}accounts/kakao/login/?code=${token}`
    );
    if (response.ok) {
      const resDate = await response.json();
      // 여기서 백엔드로부터 받은 토큰을 각각 세션, 로컬 스토리지에 저장해야 한다.
      localStorage.setItem("access_token", resDate.data.access_token);
      localStorage.setItem("refresh_token", resDate.data.refresh_token);
      localStorage.setItem("user", JSON.stringify(resDate.data.user));
      return {
        result: true,
        user: resDate.data.user,
        token: {
          access: resDate.data.access_token,
          refresh: resDate.data.refresh_token,
        },
      };
    } else {
      console.log("response :", response);
      return { result: false };
    }
  } catch (error) {
    console.log("error :", error);
    return { result: false };
  }
};
