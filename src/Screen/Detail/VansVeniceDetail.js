import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import Item from '../../components/Item';

const VansVeniceDetail = ({navigation}) => {
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
  ];

  return (
    <View style={Style.container}>
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
        data={FakeData}
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
  );
};
const Style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
