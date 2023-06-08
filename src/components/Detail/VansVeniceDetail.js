import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Item from '../Item';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';

const VansVeniceDetail = ({navigation}) => {
  const theme = useSelector(state => state.SwitchColor);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    instance
      .get('/api/products/vans')
      .then(data => {
        data.status === 200
          ? setData(data.data.data)
          : Alert.alert('warning', 'Get Data Fail', [
              {text: 'ok', style: 'cancel'},
            ]);
      })
      .catch(error =>
        Alert.alert('warning', 'server error', [{text: 'ok', style: 'cancel'}]),
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <ImageBackground
              source={{
                uri: 'https://c1.wallpaperflare.com/preview/201/268/980/banie-skateboard-man-street.jpg',
              }}
              style={Style.image}
              resizeMode="stretch"
              blurRadius={4}>
              <View style={Style.textInside}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/151/151846.png',
                    }}
                    style={Style.backImage}
                    resizeMode="center"
                  />
                </TouchableOpacity>

                <View>
                  <Text style={[Style.text, Style.textMain]}>
                    Vans Venice collection
                  </Text>
                  <Text style={Style.text}>
                    Authentic and sturdy skate apparel with a uniquely L.A
                    aesthetic. Bold, hardy and ready to skate.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          }
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('ProductDetail')}>
              <Item
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </Pressable>
          )}
        />
      )}
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
  },
  containerDark: {
    backgroundColor: '#111111',
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
  textInside: {
    paddingHorizontal: 10,
    height: '95%',
    justifyContent: 'space-between',
  },
  textMain: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 7,
  },
  backImage: {
    width: 40,
    height: 50,
    marginTop: 20,
    tintColor: 'white',
  },
});
export default VansVeniceDetail;
