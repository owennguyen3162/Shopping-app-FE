import {COUNTOD, LENGHTOD, REDUCEOD} from '../action/types';

const initialState = {
  quantity: 0,
};

export default function orderReducer(state = initialState, payload) {
  switch (payload.type) {
    case COUNTOD:
      return {
        ...state,
        quantity: (payload.quantity += 1),
      };
    case REDUCEOD:
      return {
        ...state,
        quantity: (payload.quantity -= 1),
      };
    case LENGHTOD:
      return {
        ...state,
        quantity: payload.quantity,
      };
    default:
      return {
        ...state,
      };
  }
}
