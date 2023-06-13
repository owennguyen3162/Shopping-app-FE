import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
import ItemOrder from '../../components/ItemOrder';
const OrderScreen = ({navigation}) => {
  const theme = useSelector(state => state.SwitchColor);
  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

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
    Alert.alert('Notification', 'Are you sure ?', [
      {
        text: 'Yes',
        onPress: () => {
          handleRemoveItem(id);
        },
      },
      {text: 'No', style: 'cancel'},
    ]);
  };
  const handleRemoveItem = async id => {
    setIsLoading(true);
    try {
      const res = await instance.delete(`/api/order/removeOrder/${id}`);
      if (res.status === 204) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
        Your Orders
      </Text>
      {isLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : data.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
            Orders EMPTY
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
                  />
                </Pressable>
              )}
            />
          </View>
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
});
export default OrderScreen;
