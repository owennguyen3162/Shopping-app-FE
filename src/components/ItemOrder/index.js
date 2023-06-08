import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeEn from 'dayjs/locale/en'; // With a custom alias for the locale object
const ItemOrder = props => {
  const {id, size, date, price} = props;
  const theme = useSelector(state => state.SwitchColor);

  const handle_date = date => {
    dayjs.extend(relativeTime).locale(localeEn);
    let fromNowOn = dayjs(date).fromNow();
    return fromNowOn;
  };

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

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/889/889843.png',
          }}
          style={Style.image}
        />
        <View
          style={theme.color === 'white' ? Style.line : Style.lineDark}></View>
        <View style={Style.body}>
          <View style={{height: '88%'}}>
            <Text
              style={[
                theme.color === 'white' ? Style.TextName : Style.TextNameDark,
                {fontSize: 16},
              ]}>
              wait for confirmation
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              }>
              {size >= 2 ? `have ${size} products` : `have ${size} product`}
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              }>
              {handle_date(date)}
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
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
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '96%',
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
    width: '96%',
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
    height: '100%',
    marginLeft: 15,
    justifyContent: 'center',
  },
  TextName: {color: 'black', fontWeight: 'bold', marginBottom: 3, fontSize: 13},
  TextNameDark: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: 13,
  },
  itemDelete: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginLeft: 340,
    bottom: 90,
  },
});

export default ItemOrder;
