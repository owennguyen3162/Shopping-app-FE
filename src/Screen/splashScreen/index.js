import {View, Text, Image} from 'react-native';
import React from 'react';
import {getColorToStorage} from '../../service';
import {useDispatch} from 'react-redux';
import {SwitchColor} from '../../redux/action/changeColor';
const SlapScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getTheme = async () => {
    const value = await getColorToStorage();
    return dispatch(SwitchColor(value));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../../public/image/avata.png')}
        style={{width: 230, height: 230}}
        resizeMode="contain"
      />
    </View>
  );
};

export default SlapScreen;
