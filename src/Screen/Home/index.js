import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../bottomTab/HomeScreen';
import ChatScreen from '../bottomTab/ChatScreen';
import CartScreen from '../bottomTab/CartScreen';
import HomeIcon from 'react-native-vector-icons/Feather';
import CartIcon from 'react-native-vector-icons/Feather';
import ChatIcon from 'react-native-vector-icons/Feather';
import OrderIcon from 'react-native-vector-icons/FontAwesome5';

const BottomStack = createBottomTabNavigator();
import {useSelector} from 'react-redux';
import OrderScreen from '../bottomTab/OrderScreen';
function Home() {
  const theme = useSelector(state => state.SwitchColor);
  return (
    <BottomStack.Navigator
      screenOptions={
        theme.color === 'white'
          ? {
              headerShown: false,
              tabBarActiveTintColor: 'darkorchid',
              tabBarInactiveTintColor: 'silver',
              tabBarLabelStyle: {
                fontSize: 10,
              },
            }
          : {
              headerShown: false,
              tabBarActiveTintColor: 'darkorchid',
              tabBarInactiveTintColor: 'white',
              tabBarLabelStyle: {
                fontSize: 10,
              },
              tabBarStyle: {
                backgroundColor: '#111111',
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
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ChatIcon name="message-circle" size={22} color={color} />
          ),
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
    </BottomStack.Navigator>
  );
}

export default Home;
