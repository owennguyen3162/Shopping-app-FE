import {COUNT, REDUCE} from '../action/types';

const initialState = {
  quantity: 0,
};

export default function OrderReducer(state = initialState, payload) {
  switch (payload.type) {
    case COUNT:
      return {
        ...state,
        quantity: (quantity = payload.quantity + 1),
      };
    case REDUCE:
      return {
        ...state,
        quantity: (quantity = payload.quantity - 1),
      };

    default:
      return {
        ...state,
      };
  }
}
