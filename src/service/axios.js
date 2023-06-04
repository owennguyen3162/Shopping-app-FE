import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.101:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
// instance.interceptors.request.use(
//   async (config) => {
//     const token = await TokenService.getLocalAccessToken();
//     if (token) {
//       config.headers["x_authorization"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     console.log("REQUEST ::::" + error.response.status);
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     if (originalConfig.url !== "/auth/login" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         const RefreshToken = await TokenService.getLocalRefreshToken();
//         try {
//           const rs = await instance.post("/auth/refresh", {
//             refreshToken: RefreshToken,
//           });
//           const { accessToken } = rs.data;
//           await TokenService.updateLocalAccessToken(accessToken);
//           return instance(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }

//     return Promise.reject(err);
//   }
// );
export default instance;
