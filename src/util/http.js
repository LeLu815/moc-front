import axios from "axios";
// import { userAction } from "../store/user-slice";
// import { logoutToken } from "./auth";

//토큰이 불필요한 경우
export const publicApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
});

//토큰을 함께 보내는 instance
export const privateApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

//리프레시토큰 요청 api
function postRefreshToken() {
  // 여기서 url을 변경해줘야 한다.
  const response = publicApi.post("accounts/token/refresh/", {
    refresh: localStorage.getItem("refresh_token"),
  });
  return response;
}

// 요청 인터셉터 추가하기
privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = "Bearer " + token;

  return config;
});

// 응답 인터셉터 추가하기
//리프레시 토큰 구현
privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      if (error.response.data.message === "Unauthorized") {
        const originRequest = config;
        try {
          const tokenResponse = await postRefreshToken();
          if (tokenResponse.status === 201) {
            const { access, refresh } = tokenResponse.data;
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);
            axios.defaults.headers.common.Authorization = `Bearer ${access}`;
            originRequest.headers.Authorization = `Bearer ${access}`;
            return axios(originRequest);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (
              error.response?.status === 404 ||
              error.response?.status === 422
            ) {
              // 여기
              // alert(LOGIN.MESSAGE.EXPIRED);
              // window.location.replace("/login");
            } else {
              // alert(LOGIN.MESSAGE.ETC);
              // window.location.replace("/login");
            }
          }
        }
      }
    }
    return Promise.reject(error);
  }
);
