import * as React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Pants from '../clothes/Pants';
import Sweaters from '../clothes/Sweaters';
import {ScreenOption} from '../../utils/ScreenOptions';
import Accesories from '../clothes/Accesories';
import Shoes from '../clothes/Shoes';
import Underwear from '../clothes/Underwear';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} style={Style.drawContainer}>
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
    </Drawer.Navigator>
  );
}
const Style = StyleSheet.create({
  image: {
    marginVertical: 30,
  },
  drawContainer: {
    paddingHorizontal: 10,
  },
  childDrawer: {
    alignItems: 'center',
  },
});
export default Home;
