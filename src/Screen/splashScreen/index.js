import {View, Image} from 'react-native';
import React from 'react';
const SlapScreen = () => {
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
