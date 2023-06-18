import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeEn from 'dayjs/locale/en'; // With a custom alias for the locale object
const ItemNotification = props => {
  const {id, description, date,remvoteItem} = props;
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
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1156/1156949.png',
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
              Notification
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              } numberOfLines={3}>
              {description}
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.TextName : Style.TextNameDark
              }>
              {handle_date(date)}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Pressable onPress={() => remvoteItem(id)}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png',
              }}
              style={
                theme.color === 'white'
                  ? Style.itemDelete
                  : Style.itemDeleteDark
              }
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
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 113,
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
    height: 113,
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
    flex: 6,
  },
  TextName: {color: 'black', fontWeight: 'bold', marginBottom: 3, fontSize: 13},
  TextNameDark: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
    fontSize: 13,
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

export default ItemNotification;
