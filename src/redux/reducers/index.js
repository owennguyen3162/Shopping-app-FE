import {combineReducers} from 'redux';

import SwitchColor from './switchColor';
import Auth from './auth';
import tabbarStatus from './tabbarStatus';
import cart from './cart';

const Reducer = combineReducers({
  SwitchColor: SwitchColor,
  Auth: Auth,
  tabbarStatus: tabbarStatus,
  Cart: cart,
});

export default (state, action) => Reducer(state, action);
