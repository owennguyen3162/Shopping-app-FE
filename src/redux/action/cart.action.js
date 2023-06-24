import {COUNT, LENGHT, REDUCE,CHECK_OUT} from './types';

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
    type: LENGHT,
    quantity: quantity,
  };
};

const checkOut = () => {
  return {
    type: CHECK_OUT,
    quantity: 0,
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

export const chech_out = () => dispatch => {
  dispatch(checkOut());
};
