import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Item = props => {
  const {name, price, description, image} = props;
  return (
    <View style={Style.container}>
      <Image source={{uri: image}} style={Style.image} />
      <View style={Style.line}></View>
      <View
        style={{
          height: '80%',
          justifyContent: 'space-between',
          marginLeft: 15,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{name}</Text>
        <Text style={{width: '45%', fontSize: 12.5, color: 'black'}}>
          {description}
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>$ {price}</Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginLeft: 15,
  },
  line: {
    height: '80%',
    borderWidth: 0.5,
    borderColor: 'silver',
    marginLeft: 15,
  },
});

export default Item;
