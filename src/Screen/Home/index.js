import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../bottomTab/HomeScreen';
import CartScreen from '../bottomTab/CartScreen';
import HomeIcon from 'react-native-vector-icons/Feather';
import CartIcon from 'react-native-vector-icons/Feather';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import OrderIcon from 'react-native-vector-icons/FontAwesome5';

const BottomStack = createBottomTabNavigator();
import {useSelector} from 'react-redux';
import OrderScreen from '../bottomTab/OrderScreen';
import Notification from '../bottomTab/NotificationScreen';
function Home() {
  const theme = useSelector(state => state.SwitchColor);
  const display = useSelector(state => state.tabbarStatus);

  return (
    <BottomStack.Navigator
      screenOptions={
        theme.color === 'white'
          ? {
              headerShown: false,
              tabBarActiveTintColor: 'darkorchid',
              tabBarInactiveTintColor: 'silver',
              tabBarShowLabel: false,
              tabBarLabelStyle: {
                fontSize: 10,
              },
              tabBarStyle: {
                display:display.display
              },
            }
          : {
              headerShown: false,
              tabBarActiveTintColor: 'darkorchid',
              tabBarInactiveTintColor: 'white',
              tabBarShowLabel: false,
              tabBarLabelStyle: {
                fontSize: 10,
              },
              tabBarStyle: {
                backgroundColor: '#111111',
                display:display.display
              },
              
            }
      }>
      <BottomStack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon name="home" size={22} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <BottomStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <CartIcon name="shopping-cart" size={22} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <BottomStack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color}) => (
            <OrderIcon name="list-alt" size={22} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <BottomStack.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({color}) => (
            <NotificationIcon
              name="notifications-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
}

export default Home;
