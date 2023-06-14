import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  RefreshControl,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ItemCart from '../../components/Item/ItemCart';
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
import {RadioButton} from 'react-native-paper';
import BottomSheet from '../../components/bottomSheet';
import Modal from 'react-native-modal';
const CartScreen = () => {
  const theme = useSelector(state => state.SwitchColor);
  const [data, setData] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [address, setAddress] = React.useState('ba vi, Ha noi');
  const [isLoading, setIsLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [value, setValue] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const [option, setOption] = React.useState(50);
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = async () => {
    try {
      const res = await instance.get('/api/cart/' + (await getUserId()));
      if (res.status === 200) {
        setData(res.data);
        setPrice(handle_TotalPrice(res.data));
      }
    } catch (error) {
      Alert.alert('notification', 'error', [{text: 'OK', style: 'cancel'}]);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };
  const handle_Checkout = async () => {
    setIsLoading(true);
    try {
      const res = await instance.post(
        `/api/cart/checkout/${await getUserId()}`,
        {
          address: address,
          totalPrice: price + option,
          options: option,
        },
      );
      if (res.status === 201) {
        getData();
      }
    } catch (error) {
      Alert.alert('notification', 'error:::' + error, [
        {text: 'OK', style: 'cancel'},
      ]);
    }
  };
  const handle_TotalPrice = data => {
    return data.reduce((total, item, index) => {
      return (total += item.price);
    }, 0);
  };

  const handleRemoveItem = async id => {
    toggleModal();
    setUserId(id);
  };

  // console.log(isModalVisible);
  const removeItem = async () => {
    toggleModal()
    Alert.alert('Notification', 'Are you sure', [
      {
        text: 'OK',
        onPress: async () => {
          setIsLoading(true);
          try {
            const res = await instance.delete(
              `/api/cart/removeToCart/${userId}`,
            );
            if (res.status === 204) {
              getData();
            }
          } catch (error) {
            Alert.alert('notification', 'error', [
              {text: 'OK', style: 'cancel'},
            ]);
          } finally {
            setIsLoading(false);
          }
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // console.log(data);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
        Your Cart
      </Text>
      {isLoading ? (
        <View style={Style.centerScreen}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : data.length === 0 ? (
        <View style={Style.centerScreen}>
          <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
            CART EMPTY
          </Text>
        </View>
      ) : (
        <>
          <View style={{flex: 5}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              initialNumToRender={10}
              keyExtractor={item => item.id}
              data={data}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              renderItem={({item}) => (
                <Pressable>
                  <ItemCart
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    size={item.size}
                    getIdItem={handleRemoveItem}
                    id={item.id}
                  />
                </Pressable>
              )}
            />
          </View>
          <View style={{flex: 5}}>
            <Text
              style={
                theme.color === 'white' ? Style.textBold2 : Style.textBol2dDark
              }>
              Shipping address
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.textBold : Style.textBoldDark
              }>
              Ba vi, Ha Noi
            </Text>
            <Text
              style={
                theme.color === 'white' ? Style.textBold2 : Style.textBol2dDark
              }>
              Options
            </Text>

            <View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  status={option === 50 ? 'checked' : 'unchecked'}
                  onPress={() => setOption(50)}
                />
                <Text
                  style={
                    theme.color === 'white'
                      ? Style.textBold
                      : Style.textBoldDark
                  }>
                  Slow delivery ($50)
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  status={option === 100 ? 'checked' : 'unchecked'}
                  onPress={() => setOption(100)}
                />
                <Text
                  style={
                    theme.color === 'white'
                      ? Style.textBold
                      : Style.textBoldDark
                  }>
                  Fast delivery ($100)
                </Text>
              </View>
            </View>
            <View
              style={
                theme.color === 'white' ? Style.line : Style.lineDark
              }></View>
            <View style={Style.footer}>
              <Text
                style={
                  theme.color === 'white'
                    ? Style.textFooter
                    : Style.textFooterDark
                }>
                Total
              </Text>
              <Text
                style={
                  theme.color === 'white'
                    ? Style.textFooter
                    : Style.textFooterDark
                }>
                $ {price + option}
              </Text>
            </View>

            <Pressable onPress={handle_Checkout}>
              <Text
                style={
                  theme.color === 'white' ? Style.button : Style.buttonDark
                }>
                CHECK OUT
              </Text>
            </Pressable>
          </View>
          <Modal
            onBackdropPress={() => setModalVisible(false)}
            onBackButtonPress={() => setModalVisible(false)}
            isVisible={isModalVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={Style.modal}>
            <View style={Style.modalContent}>
              <View style={Style.center}>
                <View style={Style.barIcon} />

                <View style={{width: '100%'}}>
                  <Pressable onPress={() => removeItem()}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/3687/3687412.png',
                        }}
                        style={{width: 35, height: 35}}
                      />
                      <Text style={Style.text}>Delete</Text>
                    </View>
                  </Pressable>
                  <View style={Style.line}></View>
                  <Pressable onPress={toggleModal}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/463/463612.png',
                        }}
                        style={{width: 35, height: 35}}
                      />
                      <Text style={Style.text}>Cancel</Text>
                    </View>
                  </Pressable>

                  <View style={Style.line}></View>
                </View>
              </View>
            </View>
          </Modal>
          {/* <BottomSheet value={value} removeItem={removeItem} /> */}
        </>
      )}
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
  textFooter: {color: 'black', fontWeight: 'bold'},
  textFooterDark: {color: 'white', fontWeight: 'bold'},
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
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 25,
    marginLeft: 20,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
});
export default CartScreen;
