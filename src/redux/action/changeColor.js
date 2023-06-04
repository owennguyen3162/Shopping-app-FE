import {CHANGE_COLOR} from '../action/types';

const ACTION_SUCCESS = (theme, type) => {
  return {
    type: type,
    color: theme,
  };
};

export const SwitchColor = THEME => dispatch => {
  return dispatch(ACTION_SUCCESS(THEME, CHANGE_COLOR));
};
