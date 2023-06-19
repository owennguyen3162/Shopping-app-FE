import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const ItemOrderHistory = props => {
  const {id, date, price, getIdItem, quantity} = props;
  const theme = useSelector(state => state.SwitchColor);
  const formatDateTime = time => {
    let date = new Date(time);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };
  return (
    <View style={Style.containerParent}>
      <View
        style={theme.color === 'white' ? Style.container : Style.containerDark}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/7327/7327006.png',
          }}
          style={theme.color === 'white' ? Style.image : Style.imageDark}
        />
        <View
          style={theme.color === 'white' ? Style.line : Style.lineDark}></View>
        <View style={Style.body}>
          <View style={{height: '83%'}}>
            <Text
              style={
                theme.color === 'white' ? Style.textTitle : Style.textTitleDrak
              }>
              Your Bill
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              }>
              Quantity: {quantity}
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              }>
              Price: ${price}
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              }>
              Date: {formatDateTime(date)}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2989/2989988.png',
            }}
            style={
              theme.color === 'white' ? Style.itemDelete : Style.itemDeleteDark
            }
          />
        </View>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  containerParent: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 105,
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
    height: 105,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#222222',
  },
  image: {
    width: 100,
    height: 50,
    resizeMode: 'center',
    marginLeft: 15,
    tintColor: 'black',
  },
  imageDark: {
    width: 100,
    height: 50,
    resizeMode: 'center',
    marginLeft: 15,
    tintColor: 'white',
  },
  line: {
    height: '70%',
    borderWidth: 0.5,
    borderColor: 'silver',
    marginLeft: 15,
  },
  lineDark: {
    height: '70%',
    borderWidth: 0.5,
    borderColor: 'white',
    marginLeft: 15,
  },
  body: {
    height: '100%',
    marginLeft: 15,
    justifyContent: 'center',
    flex: 5.2,
  },
  TextName: {color: 'black', fontWeight: 'bold', marginBottom: 3, fontSize: 13},
  TextNameDark: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: 13,
  },
  textTitle: {
    color: 'purple',
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: 15,
  },
  textTitleDrak: {
    color: 'purple',
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: 15,
  },

  itemDeleteDark: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  itemDelete: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
});

export default ItemOrderHistory;
