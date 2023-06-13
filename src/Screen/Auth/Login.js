import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import instance from '../../service/axios';
import {
  setLocalAccessToken,
  setLocalRefreshToken,
} from '../../service/token.service';
import { setUser } from '../../service/user.service';
import { useDispatch } from 'react-redux';
import { _handleLogin } from '../../redux/action/auth.action';
import messaging from "@react-native-firebase/messaging";
const Login = ({ navigation }) => {
  const [Phone, setPhone] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  const navigationRegister = () => {
    navigation.navigate('Register');
  };
  const handleLogin = async () => {
    setIsLoading(true);
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    instance
      .post('/api/user/login', {
        phone: Phone,
        password: password,
        fcmToken: token
      })
      .then(async res => {
        if (res.status === 200) {
          await setUser(res.data.data.id);
          await setLocalAccessToken(res.data.data.accessToken);
          await setLocalRefreshToken(res.data.data.refreshToken);
          dispatch(_handleLogin());
        }
      })
      .catch(error =>
        Alert.alert('notification', 'Login fail', [
          { text: 'OK', style: 'cancel' },
        ]),
      )
      .finally(() => setIsLoading(false));
  };
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <Image
            source={require('../../public/image/avata.png')}
            style={Style.image}
          />
          <TextInput
            style={Style.textInput}
            placeholder="Phone"
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            style={Style.textInput}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={Style.button} onPress={handleLogin}>
            <Text style={Style.fontLogin}>LOGIN</Text>
          </TouchableOpacity>
          <View style={Style.row}>
            <Text>You don't have an account ?</Text>
            <TouchableOpacity
              style={{ marginHorizontal: 10 }}
              onPress={navigationRegister}>
              <Text style={{ textDecorationLine: 'underline' }}>Register</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '100%',
    borderRadius: 6,
    marginVertical: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'silver',
    width: '100%',
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontLogin: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    marginBottom: 10,
  },
});

export default Login;
