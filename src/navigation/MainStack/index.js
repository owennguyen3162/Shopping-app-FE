import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from '../Auth';
import HomeStack from '../Home';
const Stack = createNativeStackNavigator();
const isLogined = true;
const MainStack = () => {
  return !isLogined ? <AuthStack /> : <HomeStack />;
};

export default MainStack;
