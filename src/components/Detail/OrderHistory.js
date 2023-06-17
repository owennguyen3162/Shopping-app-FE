import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const OrderHistory = () => {
  const theme = useSelector(theme => theme.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text>OrderHistory</Text>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#111111',
  },
});
export default OrderHistory;
