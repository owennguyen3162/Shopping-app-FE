import {
  CHECK_OUT,
  COUNT,
  SIZE,
  REDUCE,
  REMOVE_ORDERSIDE,
} from '../action/types';

const initialState = {
  quantity: 0,
};

export default function cartReducer(state = initialState, payload) {
  switch (payload.type) {
    case COUNT:
      return {
        ...state,
        quantity: (payload.quantity += 1),
      };
    case REDUCE:
      return {
        ...state,
        quantity: (payload.quantity -= 1),
      };
    case SIZE:
      return {
        ...state,
        quantity: payload.quantity,
      };
    case CHECK_OUT:
      return {
        ...state,
        quantity: payload.quantity,
      };
    case REMOVE_ORDERSIDE:
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
