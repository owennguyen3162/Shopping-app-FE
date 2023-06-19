import {SHOW_TABAR, HIDDEN_TABBAR} from './types';

const sendAction = (value, type) => {
  return {
    type: type,
    value: value,
  };
};

export const showTabbar = () => dispatch => {
  dispatch(sendAction('flex', SHOW_TABAR));
};

export const hideTabbar = () => dispatch => {
  dispatch(sendAction('none', HIDDEN_TABBAR));
};
