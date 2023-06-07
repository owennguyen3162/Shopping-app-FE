import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Item = props => {
  const {name, price, description, image, size, id} = props;
  const theme = useSelector(state => state.SwitchColor);
  return (
    <View style={Style.containerParent}>
      <View
        style={theme.color === 'white' ? Style.container : Style.containerDark}>
        <Pressable onPress={() => props.getIdItem(id)}>
          <View style={{height: '100%'}}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/189/189690.png',
              }}
              style={Style.itemDelete}
            />
          </View>
        </Pressable>

        <Image source={{uri: image}} style={Style.image} />
        <View
          style={theme.color === 'white' ? Style.line : Style.lineDark}></View>
        <View style={Style.body}>
          <Text
            style={
              theme.color === 'white' ? Style.TextName : Style.TextNameDark
            }>
            {name}
          </Text>
          <Text
            style={
              theme.color === 'white' ? Style.textDesc : Style.textDescDark
            }
            numberOfLines={3}>
            {description}
          </Text>
          <View style={Style.footer}>
            <Text
              style={
                theme.color === 'white' ? Style.textPrice : Style.textPriceDark
              }>
              Size {size}
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.textPrice : Style.textPriceDark
              }>
              $ {price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  containerParent: {
    width: '100%',
    height: 135,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '96%',
    height: 120,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
  },
  containerDark: {
    width: '96%',
    height: 120,
    borderWidth: 1,
    borderRadius: 5,
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
  },
  TextName: {color: 'black', fontWeight: 'bold'},
  TextNameDark: {color: 'white', fontWeight: 'bold'},
  textDesc: {
    width: 200,
    fontSize: 12.5,
    color: 'black',
  },
  textDescDark: {width: 200, fontSize: 12.5, color: 'white'},
  textPrice: {color: 'black', fontWeight: 'bold'},
  textPriceDark: {color: 'white', fontWeight: 'bold'},
  itemDelete: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginLeft: 340,
    bottom: 105,
  },
  footer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default Item;
