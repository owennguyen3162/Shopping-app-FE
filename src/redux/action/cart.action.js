import {COUNT, SIZE, REDUCE, CHECK_OUT, REMOVE_ORDERSIDE} from './types';

const count = quantity => {
  return {
    type: COUNT,
    quantity: quantity,
  };
};

const reduce = quantity => {
  return {
    type: REDUCE,
    quantity: quantity,
  };
};

const getQuantity = quantity => {
  return {
    type: SIZE,
    quantity: quantity,
  };
};

const checkOut = () => {
  return {
    type: CHECK_OUT,
    quantity: 0,
  };
};

const remove = (quantity1, quantity2) => {
  return {
    type: REMOVE_ORDERSIDE,
    quantity: quantity1 + quantity2,
  };
};

export const count_quantity = quantity => dispatch => {
  dispatch(count(quantity));
};

export const reduce_quantity = quantity => dispatch => {
  dispatch(reduce(quantity));
};

export const get_quantity = quantity => dispatch => {
  dispatch(getQuantity(quantity));
};

export const check_out = () => dispatch => {
  dispatch(checkOut());
};

export const remote_orderSide = (quantity1, quantity2) => dispatch => {
  dispatch(remove(quantity1, quantity2));
};
