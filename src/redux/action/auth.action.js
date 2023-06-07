const {LOGIN, LOGIN_OUT} = require('./types');

const _LoginMethod = () => {
  return {
    type: LOGIN,
    isLoginess: true,
  };
};

const _LogoutMethod = () => {
  return {
    type: LOGIN_OUT,
    isLoginess: false,
  };
};

export const _handleLogin = () => dispatch => {
  return dispatch(_LoginMethod());
};
export const _handleLogout = () => dispatch => {
  return dispatch(_LogoutMethod());
};
