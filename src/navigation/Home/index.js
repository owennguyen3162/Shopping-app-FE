import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../../components/Detail';
import OrdersDetail from '../../components/Detail/OrdersDetail';
import VansVeniceDetail from '../../components/Detail/VansVeniceDetail';
import Home from '../../Screen/Home';
import EditProfile from '../../components/Detail/EditProfile';
import OrderHistory from '../../Screen/orderHistory/OrderHistory';
import OrdersHistoryDetail from '../../components/Detail/OrdersHistoryDetail';
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
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen
        name="OrdersHistoryDetail"
        component={OrdersHistoryDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
