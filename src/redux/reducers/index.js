import {combineReducers} from 'redux';

import switchColor from './switchColor';
import API from './Api';

const Reducer = combineReducers({
  SwitchColor: switchColor,
  API: API,
});

export default (state, action) => Reducer(state, action);
