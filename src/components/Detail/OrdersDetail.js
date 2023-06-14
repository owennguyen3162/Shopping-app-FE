import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Item from '../Item/Item';

const OrdersDetail = ({route, navigation}) => {
  const {data, totalPrice, code, address, time, status} = route.params;
  const theme = useSelector(state => state.SwitchColor);
  const converTime = data => {
    let date = new Date(data);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <View style={{flex: 1.3}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png',
            }}
            style={
              theme.color === 'white' ? Style.backImage : Style.backImageDark
            }
            resizeMode="stretch"
          />
        </Pressable>
        <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
          Code ID: {code}
        </Text>
        <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
          Quantity: {data.length}
        </Text>
        <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
          Total: ${totalPrice}
        </Text>
        <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
          Shipping address: {address}
        </Text>
        <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
          Status: {status}
        </Text>
        <Text
          style={theme.color === 'white' ? Style.textTime : Style.textTimeDark}>
          Time: {converTime(time)}
        </Text>
      </View>
      <View
        style={{borderWidth: 1, width: '100%', borderColor: 'silver', marginTop:35}}></View>
      <View style={{flex: 3, marginTop: 5}}>
        <FlatList
          data={data}
          keyExtractor={item => item.CartId}
          renderItem={({item}) => (
            <Item
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              sizee={item.size}
            />
          )}
        />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  backImageDark: {
    width: 36,
    height: 36,
    tintColor: 'white',
    marginVertical: 25,
  },
  backImage: {width: 36, height: 36, tintColor: 'black', marginVertical: 25},
  textDark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  text: {color: 'black', fontWeight: 'bold', fontSize: 15, marginBottom: 8},
  textTimeDark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 8,
  },
  textTime: {color: 'black', fontWeight: 'bold', fontSize: 13, marginBottom: 8},
});

export default OrdersDetail;
