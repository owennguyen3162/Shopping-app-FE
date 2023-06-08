import React from 'react';
import AuthStack from '../Auth';
import HomeStack from '../Home';
import {useDispatch, useSelector} from 'react-redux';
import {getUserId} from '../../service/user.service';
import {_handleLogin} from '../../redux/action/auth.action';
import {NavigationContainer} from '@react-navigation/native';
import SlapScreen from '../../Screen/splashScreen';
const MainStack = () => {
  const isLoginess = useSelector(state => state.Auth);
  const [checkSession, setCheckSession] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    await getUserId()
      .then(res => {
        if (res) {
          dispatch(_handleLogin());
        }
      })
      .finally(() => setCheckSession(false));
  };

  return (
    <NavigationContainer>
      {checkSession ? (
        <SlapScreen />
      ) : !isLoginess.isLoginess ? (
        <AuthStack />
      ) : (
        <HomeStack />
      )}
    </NavigationContainer>
  );
};

export default MainStack;
