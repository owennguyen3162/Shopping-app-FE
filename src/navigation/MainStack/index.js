import React from 'react';
import AuthStack from '../Auth';
import HomeStack from '../Home';
import {useDispatch, useSelector} from 'react-redux';
import {getUserId} from '../../service/user.service';
import {_handleLogin} from '../../redux/action/auth.action';
import {NavigationContainer} from '@react-navigation/native';
import SlapScreen from '../../Screen/splashScreen';
import {getColorToStorage} from '../../service';
import {SwitchColor} from '../../redux/action/changeColor';
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
      .then(async res => {
        if (res) {
          dispatch(_handleLogin());
          await getTheme();
        }
      })
      .finally(() => setCheckSession(false));
  };
  const getTheme = async () => {
    getColorToStorage().then(res => {
      dispatch(SwitchColor(res));
    });
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
