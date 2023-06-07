import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import ItemHorizontal from '../../components/ItemHorizontal';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
const Tops = ({navigation}) => {
  const theme = useSelector(state => state.SwitchColor);

  const [Data, setData] = React.useState([]);
  const [dataSelling, setBestSelling] = React.useState([]);

  const [isloading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await instance.get('/api/products/newArrivals');
      const bestSelling = await instance.get('/api/products/bestSelling');
      setData(data.data.data);
      setBestSelling(bestSelling.data.data);
    } catch (error) {
      {
        console.log(error);
        Alert.alert('Warning', 'server error', [{text: 'ok'}]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <StatusBar hidden={true} />
      {isloading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <View style={Style.header}>
            <Image
              source={require('../../public/image/avata.png')}
              style={theme.color === 'white' ? Style.Logo : Style.LogoDark}
              resizeMode="stretch"
            />
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828859.png',
                }}
                style={theme.color === 'white' ? Style.image : Style.imageDark}
              />
            </TouchableWithoutFeedback>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Style.header}>
              <Text
                style={theme.color === 'white' ? Style.text : Style.textDark}>
                New arrivals
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <FlatList
                initialNumToRender={3}
                keyExtractor={item => item.id}
                data={Data}
                horizontal
                showsHorizontalScrollIndicator={false}
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
                    <ItemHorizontal image={item.image} />
                  </Pressable>
                )}
              />
            </View>
            <View style={Style.view}>
              <View style={{width: '100%'}}>
                <Text
                  style={theme.color === 'white' ? Style.text : Style.textDark}>
                  Vans Venice collection
                </Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('VansVeniceDetail')}>
                <Image
                  source={{
                    uri: 'https://vans-static.nyc3.digitaloceanspaces.com/vans-skatebording/2022/03/itsxapa.jpg',
                  }}
                  style={Style.imageLarge}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={Style.header}>
              <Text
                style={theme.color === 'white' ? Style.text : Style.textDark}>
                Best selling
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <FlatList
                initialNumToRender={3}
                keyExtractor={item => item.id}
                data={dataSelling}
                horizontal
                showsHorizontalScrollIndicator={false}
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
                    <ItemHorizontal image={item.image} />
                  </Pressable>
                )}
              />
            </View>

            <View style={Style.view}>
              <View style={{width: '100%'}}>
                <Text
                  style={theme.color === 'white' ? Style.text : Style.textDark}>
                  Vans Wayvee drop
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://ei7ew96pew2.exactdn.com/wp-content/uploads/2019/10/vans-the-nightmare-before-christmas-1190148.jpeg?strip=all&lossy=1&ssl=1',
                }}
                style={Style.imageLarge}
              />
            </View>
          </ScrollView>
        </>
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

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
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
  imageLarge: {
    width: 380,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 5,
    marginTop: 20,
  },
  view: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {width: 120, height: 45},
  LogoDark: {tintColor: 'white', width: 120, height: 45},
});
export default Tops;
