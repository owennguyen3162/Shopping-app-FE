import {combineReducers} from 'redux';

import SwitchColor from './switchColor';
import Auth from './auth';
import tabbarStatus from './tabbarStatus';

const Reducer = combineReducers({
  SwitchColor: SwitchColor,
  Auth: Auth,
  tabbarStatus: tabbarStatus,
});

export default (state, action) => Reducer(state, action);
