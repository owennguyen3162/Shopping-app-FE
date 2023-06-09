import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
import ItemOrderHistory from '../../components/Item/ItemOrderHistory';
const OrderHistory = ({navigation}) => {
  const theme = useSelector(theme => theme.SwitchColor);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await instance.get(
        `/api/order/history/${await getUserId()}`,
      );
      if (data.status === 200) {
        setData(data.data.data);
      }
    } catch (error) {
      Alert.alert('Notification', 'Get data fail', [
        {text: 'OK', style: 'cancel'},
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2732/2732652.png',
            }}
            style={theme.color === 'white' ? Style.icon : Style.iconDark}
          />
        </Pressable>
        <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
          ORDER HISTORY
        </Text>
        <Text></Text>
      </View>

      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{flex: 1, width: '100%', marginTop: 30}}>
          <FlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item}) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('OrdersHistoryDetail', {
                    data: JSON.parse(item.cartItem),
                    totalPrice: item.totalPrice,
                    address: item.address,
                    time: item.date,
                  })
                }>
                <ItemOrderHistory
                  price={item.totalPrice}
                  date={item.date}
                  quantity={JSON.parse(item.cartItem).length}
                />
              </Pressable>
            )}
          />
        </View>
      )}
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
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    marginRight: 20,
    marginTop: 20,
  },
  titleDark: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    marginRight: 20,
    marginTop: 20,
  },
});
export default OrderHistory;
