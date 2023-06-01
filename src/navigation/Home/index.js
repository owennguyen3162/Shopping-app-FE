import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screen/Home';
import {ScreenOption} from '../../utils/ScreenOptions';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOption}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
