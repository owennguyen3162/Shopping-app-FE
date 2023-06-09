import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Item = props => {
  const {name, price, description, image, sizee} = props;
  const theme = useSelector(state => state.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Image source={{uri: image}} style={Style.image} />
      <View
        style={theme.color === 'white' ? Style.line : Style.lineDark}></View>
      <View style={Style.body}>
        <Text
          style={theme.color === 'white' ? Style.TextName : Style.TextNameDark}>
          {name}
        </Text>
        <Text
          style={theme.color === 'white' ? Style.textDesc : Style.textDescDark}
          numberOfLines={3}>
          {description}
        </Text>
        <View style={Style.footer}>
          <Text
            style={
              theme.color === 'white' ? Style.textPrice : Style.textPriceDark
            }>
            $ {price}
          </Text>
          {sizee ? (
            <Text
              style={
                theme.color === 'white' ? Style.textPrice : Style.textPriceDark
              }>
              Size {sizee}
            </Text>
          ) : (
            <></>
          )}
        </View>
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
  containerDark: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#222222',
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
  lineDark: {
    height: '80%',
    borderWidth: 0.5,
    borderColor: 'white',
    marginLeft: 15,
  },
  body: {
    height: '80%',
    justifyContent: 'space-between',
    marginLeft: 15,
    width: '100%',
  },
  TextName: {color: 'black', fontWeight: 'bold'},
  TextNameDark: {color: 'white', fontWeight: 'bold'},
  textDesc: {width: "53%", fontSize: 12.5, color: 'black'},
  textDescDark: {
    width: "53%",
    fontSize: 12.5,
    color: 'white',
  },
  textPrice: {color: 'black', fontWeight: 'bold'},
  textPriceDark: {color: 'white', fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
  },
});

export default Item;
