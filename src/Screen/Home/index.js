import * as React from 'react';
import {View, Text, Button, Image, StyleSheet, StatusBar} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Pants from '../clothes/Pants';
import {ScreenOption} from '../../utils/ScreenOptions';
import Account from '../Account';
import Sweaters from '../clothes/Sweaters';
import Accesories from '../clothes/Accesories';
import Shoes from '../clothes/Shoes';
import Underwear from '../clothes/Underwear';
import Animated from 'react-native-reanimated';

const CustomDrawerContent = props => {
  const progress = useDrawerProgress();

  // If you are on react-native-reanimated 1.x, use `Animated.interpolate` instead of `Animated.interpolateNode`
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <DrawerContentScrollView {...props} style={Style.drawContainer}>
      <Animated.View style={{transform: [{translateX}]}}>
        <View style={Style.childDrawer}>
          <Image
            source={require('../../public/image/avata.png')}
            style={Style.image}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close"
          onPress={() => props.navigation.toggleDrawer()}
        />
        <View style={Style.bottomDrawer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1687/1687788.png',
            }}
            style={Style.light_bulb}
          />
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={ScreenOption}>
      <Drawer.Screen name="Pants" component={Pants} />
      <Drawer.Screen name="Sweaters" component={Sweaters} />
      <Drawer.Screen name="Accesories" component={Accesories} />
      <Drawer.Screen name="Shoes" component={Shoes} />
      <Drawer.Screen name="Underwear" component={Underwear} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}
const Style = StyleSheet.create({
  image: {
    marginVertical: 30,
  },
  drawContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  childDrawer: {
    alignItems: 'center',
  },
  light_bulb: {
    width: 20,
    height: 20,
    resizeMode: 'center',
  },

  bottomDrawer: {
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#EEEEEE',
    elevation: 1,
    marginTop: 30,
    marginBottom: 20,
  },
});
export default Home;
