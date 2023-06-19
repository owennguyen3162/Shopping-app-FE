import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Screen/Auth/Login';
import Register from '../../Screen/Auth/Register';
import {ScreenOption} from '../../utils/ScreenOptions';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOption}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
