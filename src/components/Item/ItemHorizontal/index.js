import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ItemHorizontal = props => {
  const theme = useSelector(state => state.SwitchColor);
  const {image} = props;
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Image source={{uri: image}} style={Style.image} />
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'silver',
    marginRight: 16,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDark: {
    width: 200,
    height: 200,
    borderWidth: 1,
    marginRight: 16,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'center',
  },
});

export default ItemHorizontal;
