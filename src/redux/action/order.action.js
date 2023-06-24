import {LENGHTOD, REDUCEOD, COUNTOD} from './types';

const count = quantity => {
  return {
    type: COUNTOD,
    quantity: quantity,
  };
};

const reduce = quantity => {
  return {
    type: REDUCEOD,
    quantity: quantity,
  };
};

const getQuantity = quantity => {
  return {
    type: LENGHTOD,
    quantity: quantity,
  };
};

export const count_quantityOD = quantity => dispatch => {
  dispatch(count(quantity));
};

export const reduce_quantityOD = quantity => dispatch => {
  dispatch(reduce(quantity));
};

export const get_quantityOD = quantity => dispatch => {
  dispatch(getQuantity(quantity));
};
