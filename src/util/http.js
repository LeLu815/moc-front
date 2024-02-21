import axios from "axios";

//토큰이 불필요한 경우
export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
});

//토큰을 함께 보내는 instance
export const privateApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

//리프레시토큰 요청 api
function postRefreshToken() {
  // 여기서 url을 변경해줘야 한다.
  const response = publicApi.post("/api/v1/auth/refresh", {
    refreshToken: localStorage.getItem("refreshToken"),
  });
  return response;
}
