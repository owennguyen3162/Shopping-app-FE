import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const OrderHistory = ({navigation}) => {
  const theme = useSelector(theme => theme.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2732/2732652.png',
          }}
          style={theme.color === 'white' ? Style.icon : Style.iconDark}
        />
      </Pressable>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#111111',
  },
  icon: {width: 35, height: 35, marginTop: 20},
  iconDark: {width: 35, marginTop: 20, height: 35, tintColor: 'white'},
});
export default OrderHistory;
