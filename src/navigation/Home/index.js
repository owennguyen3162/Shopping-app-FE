import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../../components/Detail';
import OrdersDetail from '../../components/Detail/OrdersDetail';
import VansVeniceDetail from '../../components/Detail/VansVeniceDetail';
import Home from '../../Screen/Home';
import {ScreenOption} from '../../utils/ScreenOptions';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'float',
        animation: 'fade',
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VansVeniceDetail" component={VansVeniceDetail} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="OrderDetail" component={OrdersDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
