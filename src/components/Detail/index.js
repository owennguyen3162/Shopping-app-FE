import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
const ProductDetail = ({navigation, route}) => {
  const [size, setSize] = React.useState('S');
  const [isLoading, setIsLoading] = React.useState(false);
  const theme = useSelector(state => state.SwitchColor);
  const {name, image, id, description, price} = route.params;
  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      const res = await instance.post('/api/cart/addToCart', {
        userId: await getUserId(),
        productId: id,
        size: size,
      });
      if (res.status === 201) {
        return Alert.alert('Notification', 'Add to cart successfully', [
          {text: 'OK'},
        ]);
      }
    } catch (error) {
      Alert.alert('Warning', 'Add to cart fail', [{text: 'OK'}]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: '100%'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/151/151846.png',
          }}
          style={
            theme.color === 'white' ? Style.backImage : Style.backImageDark
          }
          resizeMode="center"
        />
      </TouchableOpacity>

      <View
        style={
          theme.color === 'white' ? Style.boderImage : Style.boderImageDark
        }>
        <Image
          source={{
            uri: image,
          }}
          style={Style.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={Style.content}>
        <Text style={theme.color === 'white' ? Style.text1 : Style.text1Dark}>
          {name}
        </Text>
        <Text style={theme.color === 'white' ? Style.text2 : Style.text2Dark}>
          {description}
        </Text>
        <Text style={theme.color === 'white' ? Style.text3 : Style.text3Dark}>
          $ {price}
        </Text>
        <View style={Style.footer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={() => setSize('S')}>
              {size === 'S' ? (
                <View style={Style.sizeHighlight}>
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.textSize
                        : Style.textSizeBlack
                    }>
                    S
                  </Text>
                </View>
              ) : (
                <View style={Style.size}>
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.textSize
                        : Style.textSizeBlack
                    }>
                    S
                  </Text>
                </View>
              )}
            </Pressable>
            <Pressable onPress={() => setSize('M')}>
              {size === 'M' ? (
                <View style={Style.sizeHighlight}>
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.textSize
                        : Style.textSizeBlack
                    }>
                    M
                  </Text>
                </View>
              ) : (
                <View style={Style.size}>
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.textSize
                        : Style.textSizeBlack
                    }>
                    M
                  </Text>
                </View>
              )}
            </Pressable>
            <Pressable onPress={() => setSize('L')}>
              {size === 'L' ? (
                <View style={Style.sizeHighlight}>
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.textSize
                        : Style.textSizeBlack
                    }>
                    L
                  </Text>
                </View>
              ) : (
                <View style={Style.size}>
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.textSize
                        : Style.textSizeBlack
                    }>
                    L
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
          <Pressable onPress={() => handleAddToCart()}>
            <View style={Style.cart}>
              {isLoading ? (
                <ActivityIndicator size={'large'} />
              ) : (
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2438/2438133.png',
                  }}
                  style={Style.cartImage}
                  resizeMode="center"
                />
              )}
            </View>
          </Pressable>
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
  containerDark: {
    flex: 1,
    backgroundColor: '#111111',
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
  boderImageDark: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flex: 4.6,
    backgroundColor: '#222222',
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
  text1Dark: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  text2: {color: 'black', marginBottom: 20},
  text2Dark: {color: 'white', marginBottom: 20},
  text3: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  text3Dark: {fontWeight: 'bold', fontSize: 20, color: 'white'},
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
    backgroundColor: 'darkviolet',
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
  textSizeBlack: {
    color: 'black',
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
  backImageDark: {
    width: 35,
    height: 45,
    marginTop: 20,
    tintColor: 'white',
  },
});
export default ProductDetail;
