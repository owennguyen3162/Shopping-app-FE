import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import ItemHorizontal from '../../components/ItemHorizontal';
import {useSelector} from 'react-redux';
const Tops = ({navigation}) => {
  const FakeData = [
    {
      id: 1,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 2,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 3,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 4,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
  ];
  const theme = useSelector(state => state.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <StatusBar hidden={true} />
      <View style={Style.header}>
        <Text style={Style.text}></Text>
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
          <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
            New arrivals
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <FlatList
            initialNumToRender={10}
            keyExtractor={item => item.id}
            data={FakeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ItemHorizontal image={item.image} />}
          />
        </View>
        <View style={Style.view}>
          <View style={{width: '100%'}}>
            <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
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
          <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
            Best sellers
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <FlatList
            initialNumToRender={10}
            keyExtractor={item => item.id}
            data={FakeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ItemHorizontal image={item.image} />}
          />
        </View>

        <View style={Style.view}>
          <View style={{width: '100%'}}>
            <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
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
});
export default Tops;
