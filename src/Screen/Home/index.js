import {ScreenOption} from '../../utils/ScreenOptions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../bottomTab/HomeScreen';
import ChatScreen from '../bottomTab/ChatScreen';
import CartScreen from '../bottomTab/CartScreen';
import HomeIcon from 'react-native-vector-icons/Feather';
import CartIcon from 'react-native-vector-icons/Feather';
import ChatIcon from 'react-native-vector-icons/Feather';

const BottomStack = createBottomTabNavigator();

function Home() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'darkorchid',
        tabBarInactiveTintColor: 'silver',
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}>
      <BottomStack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon name="home" size={27} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <BottomStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ChatIcon name="message-circle" size={27} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <CartIcon name="shopping-cart" size={27} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
    </BottomStack.Navigator>
  );
}

export default Home;
