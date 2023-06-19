import {CHANGE_COLOR} from '../action/types';
const initState = {
  color: 'white',
};
export default function changeColor(state = initState, payload) {
  switch (payload.type) {
    case CHANGE_COLOR:
      return {
        color: payload.color,
      };
    default:
      return state;
  }
}
