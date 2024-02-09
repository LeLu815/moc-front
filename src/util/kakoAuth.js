// 카카오 auth AUTHORIZE_CODE 받기

import { redirect } from "react-router-dom";

// 리다이렉션 url로 보낸다음 엑세스 토큰 받기
export const kakaoAccessFunc = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_APPKEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  window.location.href = link;
};

// 토큰 받는 함수를 라우터 로더 함수에 넣기
export const getKakaoToken = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  return code;
};

export const sendKaKaoToken = async (token) => {
  // 데이터를 보내야하는데...
  try {
    console.log("페이크 url :", process.env.REACT_APP_TOEKN_SEND_FAKE);
    const response = await fetch(process.env.REACT_APP_TOEKN_SEND_FAKE);
    // const response = await fetch(process.env.REACT_APP_TOEKN_SEND_FAKE, {
    //   method: "POST",
    //   mode: "*cors", // no-cors, *cors, same-origin
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify("유저이름으로시험해볼래요"),
    // });
    if (response.ok) {
      const resDate = await response.json();
      console.log("resDate :", resDate);
      return {
        result: true,
        user: {
          nickname: "Leein",
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

// export const sendKaKaoAccessToken = async (token) => {};
