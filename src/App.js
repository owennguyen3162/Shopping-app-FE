import 'react-native-gesture-handler';
import React from 'react';
import MainStack from './navigation/MainStack';
import {Provider} from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
