import {REQUEST, FETCH_FAIL, FETCH_SUCCESS} from '../action/types';

const initState = {
  isLoading: false,
  data: [],
  error: null,
};
export default function API(state = initState, payload) {
  switch (payload.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: payload.isLoading,
        data: payload.data,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: payload.isLoading,
        error: payload.error,
      };
    default:
      return state;
  }
}
