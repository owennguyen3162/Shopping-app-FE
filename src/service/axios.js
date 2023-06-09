import axios from 'axios';
import {
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalAccessToken,
} from './token.service';
const instance = axios.create({
  baseURL: 'http://192.168.0.103:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async config => {
    const token = await getLocalAccessToken();

    if (token) {
      config.headers['x_authorization'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;
    if (
      originalConfig.url !== '/api/user/login' &&
      '/api/user/createAccount' &&
      '/auth/refreshToken' &&
      err.response
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const RefreshToken = await getLocalRefreshToken();
        try {
          const rs = await instance.post('/auth/refreshToken', {
            refreshToken: RefreshToken,
            refreshTokenToClient: RefreshToken,
          });
          const {accessToken} = rs.data;
          await updateLocalAccessToken(accessToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);
export default instance;
