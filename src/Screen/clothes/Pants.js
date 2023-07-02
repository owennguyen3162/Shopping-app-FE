import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Item from '../../components/Item/Item';
import {useSelector} from 'react-redux';
import useFetch from '../../components/hook/useFetch';
const Pants = ({navigation}) => {
  const {data, isLoading, error, refreshing, onRefresh} =
    useFetch(`/api/products/Pant`);
  const [isLoadingCompo, SetIsLoading] = useState(true);
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const theme = useSelector(state => state.SwitchColor);
  const [dataNew, setDataNew] = useState([]);
  const [dataOld, setDataOld] = useState([]);

  useEffect(() => {
    if (!isLoading && !error) {
      setDataNew(data);
      setDataOld(data);
      SetIsLoading(isLoading);
    }
  }, [isLoading]);

  const handleSort = () => {
    setAscendingOrder(!ascendingOrder);
    if (ascendingOrder) {
      dataNew.sort((valueA, valueB) => {
        return valueA.price - valueB.price;
      });
    } else {
      dataNew.sort((valueA, valueB) => {
        return valueB.price - valueA.price;
      });
    }
  };

  const handleSearch = text => {
    if (text) {
      const dataNew = data.filter(
        item => item.name.toUpperCase().indexOf(text.toUpperCase()) >= 0,
      );
      setDataNew(dataNew);
    } else {
      setDataNew(dataOld);
    }
  };
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <StatusBar hidden={true} />
      {isLoadingCompo ? (
        <ActivityIndicator size={'large'} />
      ) : error ? (
        Alert.alert('Notification', 'Server error', [
          {text: 'OK', style: 'cancel'},
        ])
      ) : (
        <>
          <View style={Style.header}>
            <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
              Pants
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                placeholder="Search...."
                placeholderTextColor={
                  theme.color === 'white' ? 'black' : 'white'
                }
                onChangeText={text => handleSearch(text)}
                style={
                  theme.color === 'white'
                    ? Style.textInputWhite
                    : Style.textInputDark
                }
              />

              <Pressable onPress={() => handleSort()}>
                {ascendingOrder ? (
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/7375/7375970.png',
                    }}
                    style={
                      theme.color === 'white'
                        ? Style.sortImage
                        : Style.sortImageDark
                    }
                    resizeMode="center"
                  />
                ) : (
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/7375/7375968.png',
                    }}
                    style={
                      theme.color === 'white'
                        ? Style.sortImage
                        : Style.sortImageDark
                    }
                    resizeMode="center"
                  />
                )}
              </Pressable>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              initialNumToRender={10}
              keyExtractor={item => item.id}
              data={dataNew}
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
  textInputDark: {
    width: '87%',
    height: 50,
    backgroundColor: '#222222',
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white',
  },
  textInputWhite: {
    width: '87%',
    height: 50,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: 'silver',
    borderWidth: 1,
  },
  sortImage: {
    width: 28,
    height: 28,
    tintColor: '#333333',
  },
  sortImageDark: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
});
export default Pants;
