import React from 'react';
import {getColorToStorage} from '../../service';
import AuthStack from '../Auth';
import HomeStack from '../Home';
import {SwitchColor} from '../../redux/action';
import {useDispatch} from 'react-redux';
const isLogined = true;
const MainStack = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getTheme();
  });

  const getTheme = async () => {
    const value = await getColorToStorage();
    return dispatch(SwitchColor(value));
  };

  return !isLogined ? <AuthStack /> : <HomeStack />;
};

export default MainStack;
