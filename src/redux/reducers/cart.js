import {CHECK_OUT, COUNT, LENGHT, REDUCE} from '../action/types';

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
    case LENGHT:
      return {
        ...state,
        quantity: payload.quantity,
      };
      case CHECK_OUT:
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
