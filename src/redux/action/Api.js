import instance from '../../service/axios';
import {FETCH_FAIL, FETCH_SUCCESS, REQUEST} from './types';

const Success = data => {
  return {
    isLoading: false,
    data: data.data,
    type: FETCH_SUCCESS,
  };
};
const Request = () => {
  return {
    isLoading: true,
    type: REQUEST,
  };
};

const Fail = error => {
  return {
    isLoading: false,
    error: error,
    type: FETCH_FAIL,
  };
};

export const GetAllProductByCategory = category => async dispatch => {
  dispatch(Request());
  try {
    const data = await instance.get('/api/products/' + category);
    dispatch(Success(data.data));
  } catch (error) {
    dispatch(Fail(error));
  }
};
