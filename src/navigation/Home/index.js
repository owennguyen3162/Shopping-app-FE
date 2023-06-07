import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../../components/Detail';
import VansVeniceDetail from '../../Screen/Detail/VansVeniceDetail';
import Home from '../../Screen/Home';
import {ScreenOption} from '../../utils/ScreenOptions';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOption}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VansVeniceDetail" component={VansVeniceDetail} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
