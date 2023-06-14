import * as React from 'react';
import {View, Image, StyleSheet, Pressable, Alert} from 'react-native';
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

import {useSelector, useDispatch} from 'react-redux';
import {SwitchColor} from '../../redux/action/changeColor';
import {setColorToStorage} from '../../service';
import {removeCurrentUser} from '../../service/user.service';
import {_handleLogout} from '../../redux/action/auth.action';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const theme = useSelector(state => state.SwitchColor);

  const progress = useDrawerProgress();
  const dispatch = useDispatch();
  // If you are on react-native-reanimated 1.x, use Animated.interpolate instead of Animated.interpolateNode
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <DrawerContentScrollView
      {...props}
      style={
        theme.color === 'white'
          ? Style.drawContainerWhite
          : Style.drawContainerDark
      }>
      <Animated.View style={{transform: [{translateX}]}}>
        <View style={Style.childDrawer}>
          <Image
            source={require('../../public/image/avata.png')}
            style={theme.color === 'white' ? Style.imageWhite : Style.imageDark}
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
          onPress={() => {
            Alert.alert('Notification', 'Do you want logout ?', [
              {
                text: 'Yes',
                onPress: () =>
                  removeCurrentUser().then(() => dispatch(_handleLogout())),
              },
              {text: 'No', style: 'cancel'},
            ]);
          }}
        />
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <Pressable
            onPress={() => {
              dispatch(SwitchColor(theme.color === 'white' ? 'dark' : 'white'));
              setColorToStorage(theme.color === 'white' ? 'dark' : 'white');
            }}>
            <View style={Style.bottomDrawer}>
              <Image
                source={
                  theme.color === 'white'
                    ? {
                        uri: 'https://cdn-icons-png.flaticon.com/512/1687/1687788.png',
                      }
                    : {
                        uri: 'https://cdn-icons-png.flaticon.com/512/4489/4489231.png',
                      }
                }
                style={Style.light_bulb}
              />
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

function HomeScreen() {
  const theme = useSelector(state => state.SwitchColor);
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={
        theme.color === 'white'
          ? {
              headerShown: false,
              drawerLabelStyle: {
                fontWeight: 'bold',
                color: '#333333',
              },
              drawerActiveBackgroundColor: 'darkviolet',
            }
          : {
              headerShown: false,
              drawerLabelStyle: {
                fontWeight: 'bold',
                color: 'white',
              },
              drawerActiveBackgroundColor: 'darkviolet',
            }
      }>
      <Drawer.Screen
        name="New"
        component={Tops}
        options={{
          drawerIcon: () => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/5632/5632749.png',
              }}
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
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
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
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
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
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
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
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
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
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
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
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
              style={theme.color === 'white' ? Style.iconWhite : Style.iconDark}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const Style = StyleSheet.create({
  imageWhite: {
    marginVertical: 30,
  },
  imageDark: {
    marginVertical: 30,
    tintColor: 'white',
  },
  drawContainerDark: {
    flex: 1,
    backgroundColor: '#111111',
  },
  drawContainerWhite: {
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
  iconDark: {width: 30, height: 30, tintColor: 'white'},
  iconWhite: {width: 30, height: 30},
});
export default HomeScreen;
