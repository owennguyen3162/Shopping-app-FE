import React from 'react';
import {getColorToStorage} from '../../service';
import AuthStack from '../Auth';
import HomeStack from '../Home';
import {SwitchColor} from '../../redux/action/changeColor';
import {useDispatch, useSelector} from 'react-redux';
import {getUserId} from '../../service/user.service';
import {_handleLogin} from '../../redux/action/auth.action';
const MainStack = () => {
  const isLoginess = useSelector(state => state.Auth);

  const dispatch = useDispatch();
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    await getTheme();
    await getUserId().then(res => {
      if (res) {
        dispatch(_handleLogin());
      }
    });
  };

  const getTheme = async () => {
    const value = await getColorToStorage();
    return dispatch(SwitchColor(value));
  };

  return !isLoginess.isLoginess ? <AuthStack /> : <HomeStack />;
};

export default MainStack;
