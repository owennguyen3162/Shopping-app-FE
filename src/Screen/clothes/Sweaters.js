import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Item from '../../components/Item';

const Sweaters = ({navigation}) => {
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
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />
      <View style={Style.header}>
        <Text style={Style.text}>Sweaters</Text>
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828859.png',
            }}
            style={Style.image}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={{width: '100%'}}>
        <FlatList
          initialNumToRender={10}
          keyExtractor={item => item.id}
          data={FakeData}
          renderItem={({item}) => (
            <Item
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )}
        />
      </View>
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
  image: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
});
export default Sweaters;
