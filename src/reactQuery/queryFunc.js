import { useQuery } from "@tanstack/react-query";

export const saveToken = ({ accese, refresh }) => {
  return { accese, refresh };
};
// 리프레시 토큰이 만료일시에는 로그인을 다시해야 한다.
export const getRefreshToken = async () => {
  // 여기서는 로그아웃 페이지로 가게 해야하는데 고민좀 해봅시다.
  localStorage.removeItem("token");
  window.location.href = process.env.REACT_APP_LOGIN_URL;
  return null;
};

// 엑세스 토큰을 가져오는 함수
export const getAccessToken = async () => {
  const accese = sessionStorage.getItem("token");

  if (!accese) {
    const refresh = localStorage.getItem("token");
    if (refresh) {
      // 리프레시 토큰이 있으면 토큰을 이용해서 엑세스 토큰을 가져올 수 있다.
      // const response = await fetch(process.env.REACT_APP_TOEKN_SEND_FAKE, {
      //   method: "POST",
      //   headers: {
      //     Authorization: sessionStorage.getItem("token"),
      //   },
      // });
      // 여기서 이제 토큰을 저장하기
      const response = await fetch(process.env.REACT_APP_TOEKN_SEND_FAKE);
      const accese = "dvsdvsdvsvsdvsdvsd";
      sessionStorage.setItem("token", accese);

      return accese;
    }
    // 없으면 로그인을 다시 해야 한다.
  }
};

// 리액트 쿼리로 백앤드와 소통시 해더를 설정해주는 함수를 만들어주면 어떨까??
