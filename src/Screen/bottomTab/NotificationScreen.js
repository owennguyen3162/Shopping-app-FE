import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
import {ActivityIndicator} from 'react-native-paper';
import {getUserId} from '../../service/user.service';
import ItemNotification from '../../components/Item/ItemNotification';
const Notification = () => {
  const theme = useSelector(theme => theme.SwitchColor);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await instance.get(
        '/api/user/getNotification/' + (await getUserId()),
      );
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      Alert.alert('notification', 'error', [{text: 'OK', style: 'cancel'}]);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
        NOTIFICATION
      </Text>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item}) => (
              <ItemNotification
                id={item.id}
                description={item.description}
                date={item.date}
              />
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
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 15,
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
});
export default Notification;
