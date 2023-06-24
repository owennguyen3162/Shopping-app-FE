import {combineReducers} from 'redux';

import SwitchColor from './switchColor';
import Auth from './auth';
import tabbarStatus from './tabbarStatus';
import cart from './cart';
import order from './order';

const Reducer = combineReducers({
  SwitchColor: SwitchColor,
  Auth: Auth,
  tabbarStatus: tabbarStatus,
  Cart: cart,
  Order: order,
});

export default (state, action) => Reducer(state, action);
