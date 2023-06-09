import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
const Item = props => {
  const { name, price, description, image, size, id } = props;
  const theme = useSelector(state => state.SwitchColor);
  return (
    <View style={Style.containerParent}>
      <View
        style={theme.color === 'white' ? Style.container : Style.containerDark}>


        <Image source={{ uri: image }} style={Style.image} />
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
        <View style={{ flex: 1 }}>
          <Pressable onPress={() => props.getIdItem(id)}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
              }}
              style={theme.color === "white" ? Style.itemDelete : Style.itemDeleteDark}
            />
          </Pressable>
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
    width: '100%',
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
    width: '100%',
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
    flex: 5.2
  },
  TextName: { color: 'black', fontWeight: 'bold' },
  TextNameDark: { color: 'white', fontWeight: 'bold' },
  textDesc: {
    width: "95%",
    fontSize: 12.5,
    color: 'black',
  },
  textDescDark: { width: "95%", fontSize: 12.5, color: 'white', },
  textPrice: { color: 'black', fontWeight: 'bold', },
  textPriceDark: { color: 'white', fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', width: "100%" },
  itemDeleteDark: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  itemDelete: {
    width: 25,
    height: 25,
    tintColor: "black"
  },
});

export default Item;
