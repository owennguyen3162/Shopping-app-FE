import 'react-native-gesture-handler';
import React from 'react';
import MainStack from './navigation/MainStack';
import {Provider} from 'react-redux';
import store from './redux/store';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {requestUserPermission} from './service/notification';
const App = () => {
  React.useEffect(() => {
    requestUserPermission();
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
