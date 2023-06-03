import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Pants from '../clothes/Pants';
import Account from '../Account';
import Sweaters from '../clothes/Sweaters';
import Accesories from '../clothes/Accesories';
import Shoes from '../clothes/Shoes';
import Underwear from '../clothes/Underwear';
import Animated from 'react-native-reanimated';
import Tops from '../clothes/Tops';
const Drawer = createDrawerNavigator();

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
          labelStyle={{color: 'red'}}
          icon={() => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/4400/4400828.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          )}
          label="Logout"
          onPress={() => props.navigation.toggleDrawer()}
        />
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <View style={Style.bottomDrawer}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1687/1687788.png',
              }}
              style={Style.light_bulb}
            />
          </View>
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

function HomeScreen() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontWeight: 'bold',
          color: '#333333',
        },
        drawerActiveBackgroundColor: 'darkviolet',
      }}>
      <Drawer.Screen
        name="Tops"
        component={Tops}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/5632/5632749.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pants"
        component={Pants}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2774/2774378.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sweaters"
        component={Sweaters}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/6012/6012257.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Accesories"
        component={Accesories}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/9322/9322704.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Shoes"
        component={Shoes}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/80/80807.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Underwear"
        component={Underwear}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2093/2093938.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/64/64572.png',
              }}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const Style = StyleSheet.create({
  image: {
    marginVertical: 30,
  },
  drawContainer: {
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
export default HomeScreen;
