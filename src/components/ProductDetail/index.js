import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';

const ProductDetail = ({navigation}) => {
  const [size, setSize] = React.useState('S');
  return (
    <View style={Style.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: '100%'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/151/151846.png',
          }}
          style={Style.backImage}
          resizeMode="center"
        />
      </TouchableOpacity>

      <View style={Style.boderImage}>
        <Image
          source={{
            uri: 'https://krookedfaces.com/cdn/shop/products/unisex-crew-neck-sweatshirt-navy-front-62f181e9d68c4.jpg?v=1659994632&width=2000',
          }}
          style={Style.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={Style.content}>
        <Text style={Style.text1}>Navy KROOKED sweater</Text>
        <Text style={Style.text2}>
          Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro
          colour way.
        </Text>
        <Text style={Style.text3}>R 1,750</Text>
        <View style={Style.footer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={() => setSize('S')}>
              {size === 'S' ? (
                <View style={Style.sizeHighlight}>
                  <Text style={Style.textSize}>S</Text>
                </View>
              ) : (
                <View style={Style.size}>
                  <Text style={Style.textSize}>S</Text>
                </View>
              )}
            </Pressable>
            <Pressable onPress={() => setSize('M')}>
              {size === 'M' ? (
                <View style={Style.sizeHighlight}>
                  <Text style={Style.textSize}>M</Text>
                </View>
              ) : (
                <View style={Style.size}>
                  <Text style={Style.textSize}>M</Text>
                </View>
              )}
            </Pressable>
            <Pressable onPress={() => setSize('L')}>
              {size === 'L' ? (
                <View style={Style.sizeHighlight}>
                  <Text style={Style.textSize}>L</Text>
                </View>
              ) : (
                <View style={Style.size}>
                  <Text style={Style.textSize}>L</Text>
                </View>
              )}
            </Pressable>
          </View>
          <View style={Style.cart}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2438/2438133.png',
              }}
              style={Style.cartImage}
              resizeMode="center"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  boderImage: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flex: 4.6,
  },
  productImage: {
    width: '80%',
    height: '80%',
  },
  content: {
    marginVertical: 20,
    flex: 3.5,
  },
  text1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  text2: {color: '#B0B0B0', marginBottom: 20},
  text3: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  size: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    marginRight: 13,
    alignItems: 'center',
  },
  sizeHighlight: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginRight: 13,
    alignItems: 'center',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textSize: {
    color: 'white',
  },

  cart: {
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    marginRight: 13,
    alignItems: 'center',
  },

  cartImage: {
    width: 32,
    height: 32,
    tintColor: 'white',
  },
  backImage: {
    width: 35,
    height: 45,
    marginTop: 20,
    tintColor: 'black',
  },
});
export default ProductDetail;
