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
} from 'react-native';
import React from 'react';
import Item from '../../components/Item';
import {useSelector, useDispatch} from 'react-redux';
import {GetAllProductByCategory} from '../../redux/action/Api';
const Sweaters = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(data => data.API);
  React.useEffect(() => {
    dispatch(GetAllProductByCategory('sweaters'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const theme = useSelector(state => state.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <StatusBar hidden={true} />
      {data.isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <View style={Style.header}>
            <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
              Sweaters
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
              data={data.data}
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
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#111111',
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
export default Sweaters;
