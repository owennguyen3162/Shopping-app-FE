import React from 'react';
import {getColorToStorage} from '../../service';
import AuthStack from '../Auth';
import HomeStack from '../Home';
import {SwitchColor} from '../../redux/action/changeColor';
import {useDispatch, useSelector} from 'react-redux';
const MainStack = () => {
  const isLoginess = useSelector(state => state.Auth);

  const dispatch = useDispatch();
  React.useEffect(() => {
    getTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTheme = async () => {
    const value = await getColorToStorage();
    return dispatch(SwitchColor(value));
  };

  return !isLoginess.isLoginess ? <AuthStack /> : <HomeStack />;
};

export default MainStack;
