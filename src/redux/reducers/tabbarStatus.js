import {HIDDEN_TABBAR, SHOW_TABAR} from '../action/types';

const initialState = {
  display: 'flex',
};

export default function TabbarStatus(state = initialState, payload) {
  switch (payload.type) {
    case HIDDEN_TABBAR:
      return {
        ...state,
        display: payload.value,
      };
    case SHOW_TABAR:
      return {
        ...state,
        display: payload.value,
      };
    default:
      return {
        ...state,
      };
  }
}
