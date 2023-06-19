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
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
import ItemOrder from '../../components/Item/ItemOrder';
import Modal from 'react-native-modal';
const OrderScreen = ({navigation}) => {
  const theme = useSelector(state => state.SwitchColor);
  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);


  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = async () => {
    try {
      const res = await instance.get('/api/order/' + (await getUserId()));
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      Alert.alert('notification', 'error', [{text: 'OK', style: 'cancel'}]);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remvoteItem = async id => {
    setOrderId(id)
    toggleModal();
  };
  const handleRemoveItem = () => {
    toggleModal();
    Alert.alert('Notification', 'Are you sure ?', [
      {
        text: 'Yes',
        onPress: async () => {
          setIsLoading(true);
          try {
            const res = await instance.delete(`/api/order/removeOrder/${orderId}`);
            if (res.status === 204) {
              getData();
            }
          } catch (error) {
            console.log(error);
          }
        },
      },
      {text: 'No', style: 'cancel'},
    ]);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
        YOUR ORDERS
      </Text>
      {isLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : data.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
            ORDERS EMPTY
          </Text>
        </View>
      ) : (
        <>
          <View style={{flex: 5}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              initialNumToRender={10}
              keyExtractor={item => item.id}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              data={data}
              renderItem={({item}) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('OrderDetail', {
                      data: JSON.parse(item.cartItem),
                      code: item.id,
                      totalPrice: item.totalPrice,
                      address: item.address,
                      time: item.date,
                      status: item.status
                    })
                  }>
                  <ItemOrder
                    name={item.name}
                    size={JSON.parse(item.cartItem).length}
                    date={item.date}
                    price={item.totalPrice}
                    getIdItem={remvoteItem}
                    id={item.id}
                    status={item.status}
                    remvoteItem={remvoteItem}
                  />
                </Pressable>
              )}
            />
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
            <View style={theme.color === "white" ? Style.modalContent: Style.modalContentDark}>
              <View style={Style.center}>
                <View style={Style.barIcon} />

                <View style={{width: '100%'}}>
                  <Pressable onPress={() => handleRemoveItem()}>
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
                        style={{width: 30, height: 30}}
                      />
                      <Text style={theme.color === "white" ? Style.text: Style.textDark}>Delete</Text>
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
                        style={{width: 30, height: 30}}
                      />
                      <Text style={theme.color === "white" ? Style.text: Style.textDark}>Cancel</Text>
                    </View>
                  </Pressable>

                  <View style={Style.line}></View>
                </View>
              </View>
            </View>
          </Modal>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 13,
  },
  titleDark: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 13,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContentDark: {
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20,
  },
  modalContent: {
    backgroundColor: 'white',
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
    color: 'black',
    fontSize: 16,
    paddingVertical: 20,
    marginLeft: 20,
  },
  textDark: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 20,
    marginLeft: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
});
export default OrderScreen;
