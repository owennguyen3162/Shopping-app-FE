import {ScreenOption} from '../../utils/ScreenOptions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../bottomTab/HomeScreen';
import ChatScreen from '../bottomTab/ChatScreen';
import CartScreen from '../bottomTab/CartScreen';

const BottomStack = createBottomTabNavigator();

function Home() {
  return (
    <BottomStack.Navigator screenOptions={ScreenOption}>
      <BottomStack.Screen name="Main" component={HomeScreen} />
      <BottomStack.Screen name="Chat" component={ChatScreen} />
      <BottomStack.Screen name="Cart" component={CartScreen} />
    </BottomStack.Navigator>
  );
}

export default Home;
