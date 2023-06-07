import {combineReducers} from 'redux';

import switchColor from './switchColor';
import Auth from './auth';

const Reducer = combineReducers({
  SwitchColor: switchColor,
  Auth: Auth,
});

export default (state, action) => Reducer(state, action);
