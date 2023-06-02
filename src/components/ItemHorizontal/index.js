import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ItemHorizontal = props => {
  const {image} = props;
  return (
    <View style={Style.container}>
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
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'center',
  },
});

export default ItemHorizontal;
