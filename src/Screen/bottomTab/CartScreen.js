import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ItemCart from '../../components/ItemCart';
const CartScreen = ({navigation}) => {
  const theme = useSelector(state => state.SwitchColor);
  const FakeData = [
    {
      id: 1,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 2,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 3,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 4,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
  ];
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
        Your Cart
      </Text>
      <View style={{flex: 5}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          keyExtractor={item => item.id}
          data={FakeData}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('ProductDetail')}>
              <ItemCart
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </Pressable>
          )}
        />
      </View>
      <View style={{flex: 4}}>
        <Text
          style={
            theme.color === 'white' ? Style.textBold2 : Style.textBol2dDark
          }>
          Shipping address
        </Text>
        <Text
          style={theme.color === 'white' ? Style.textBold : Style.textBoldDark}>
          Ba vi, Ha Noi
        </Text>
        <Text
          style={
            theme.color === 'white' ? Style.textBold2 : Style.textBol2dDark
          }>
          Options
        </Text>
        <Text
          style={theme.color === 'white' ? Style.textBold : Style.textBoldDark}>
          Fast delivery
        </Text>
        <Text
          style={theme.color === 'white' ? Style.textBold : Style.textBoldDark}>
          Slow delivery
        </Text>
        <View
          style={theme.color === 'white' ? Style.line : Style.lineDark}></View>
        <View style={Style.footer}>
          <Text
            style={
              theme.color === 'white' ? Style.textFooter : Style.textFooterDark
            }>
            Total
          </Text>
          <Text
            style={
              theme.color === 'white' ? Style.textFooter : Style.textFooterDark
            }>
            R 200
          </Text>
        </View>
        <Text style={theme.color === 'white' ? Style.button : Style.buttonDark}>
          CHECK OUT
        </Text>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 13,
  },
  titleDark: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 13,
  },
  button: {
    width: '100%',
    height: 60,
    color: 'black',
    backgroundColor: '#C4C4C4',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 59,
    borderRadius: 30,
    marginTop: 32,
  },
  buttonDark: {
    width: '100%',
    height: 60,
    color: 'white',
    backgroundColor: '#222222',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 59,
    borderRadius: 30,
    marginTop: 32,
  },
  textBold: {color: 'black', marginTop: 10, fontSize: 14},
  textBoldDark: {color: 'white', marginTop: 10, fontSize: 14},
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  lineDark: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
  footer: {flexDirection: 'row', justifyContent: 'space-between'},
  textFooter: {color: 'black'},
  textFooterDark: {color: 'white'},
  textBold2: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textBol2dDark: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default CartScreen;
