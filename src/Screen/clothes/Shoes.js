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
} from 'react-native';
import React from 'react';
import Item from '../../components/Item';

const Shoes = ({navigation}) => {
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
    {
      id: 5,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 6,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 7,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
    {
      id: 8,
      image:
        'https://cdn.shopify.com/s/files/1/0613/7695/4559/products/pixelcut-export-1679479942753_7a99f9d2-bb3a-4848-bdb1-0b6520ba1a0d_1800x1800.png?v=1681602819',
      price: 123,
      name: 'Milford beanie',
      description:
        'The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label.',
    },
  ];
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />
      <View style={Style.header}>
        <Text style={Style.text}>Shoes</Text>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828859.png',
            }}
            style={Style.image}
          />
        </Pressable>
      </View>
      <View style={{width: '100%', height: '91%'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          keyExtractor={item => item.id}
          data={FakeData}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
export default Shoes;
