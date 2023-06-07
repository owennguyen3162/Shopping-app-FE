const {LOGIN, LOGIN_OUT} = require('../action/types');

const initialState = {
  isLoginess: false,
};

const authAction = (state = initialState, payload) => {
  switch (payload.type) {
    case LOGIN:
      return {
        ...state,
        isLoginess: payload.isLoginess,
      };
    case LOGIN_OUT:
      return {
        ...state,
        isLoginess: payload.isLoginess,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authAction;
