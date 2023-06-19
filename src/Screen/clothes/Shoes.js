import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React from 'react';
import Item from '../../components/Item/Item';
import {useSelector} from 'react-redux';
import useFetch from '../../components/hook/useFetch';

const Shoes = ({navigation}) => {
  const {data, isLoading, error, refreshing, onRefresh} = useFetch(
    `/api/products/shoes`,
  );

  const theme = useSelector(state => state.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <StatusBar hidden={true} />
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : error ? (
        Alert.alert('Notification', 'Server error', [
          {text: 'OK', style: 'cancel'},
        ])
      ) : (
        <>
          <View style={Style.header}>
            <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
              Accesories
            </Text>
            <Pressable onPress={() => navigation.toggleDrawer()}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828859.png',
                }}
                style={theme.color === 'white' ? Style.image : Style.imageDark}
              />
            </Pressable>
          </View>
          <View style={{width: '100%', height: '91%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              initialNumToRender={10}
              keyExtractor={item => item.id}
              data={data}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              renderItem={({item}) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('ProductDetail', {
                      id: item.id,
                      image: item.image,
                      name: item.name,
                      description: item.description,
                      price: item.price,
                    })
                  }>
                  <Item
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
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
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#111111',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 25,
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textDark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
  imageDark: {
    width: 25,
    height: 25,
    resizeMode: 'center',
    tintColor: 'white',
  },
});
export default Shoes;
