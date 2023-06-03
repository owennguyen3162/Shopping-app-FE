import {CHANG_COLOR} from '../reducers/switchColor';

const ACTION_SUCCESS = (theme, type) => {
  return {
    type: type,
    color: theme,
  };
};

export const SwitchColor = THEME => dispatch => {
  return dispatch(ACTION_SUCCESS(THEME, CHANG_COLOR));
};
