import {combineReducers} from 'redux';

import switchColor from './switchColor';

const Reducer = combineReducers({
  SwitchColor: switchColor,
});

export default (state, action) => Reducer(state, action);
