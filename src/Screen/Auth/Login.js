import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const Login = ({navigation}) => {
  const navigationRegister = () => {
    navigation.navigate('Register');
  };
  const handleLogin = () => {
    // navigation.navigate('Home');
  };
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />
      <Image
        source={require('../../public/image/avata.png')}
        style={Style.image}
      />
      <TextInput style={Style.textInput} placeholder="Email" />
      <TextInput style={Style.textInput} placeholder="Password" />
      <TouchableOpacity style={Style.button} onPress={handleLogin}>
        <Text style={Style.fontLogin}>LOGIN</Text>
      </TouchableOpacity>
      <View style={Style.row}>
        <Text>You don't have an account ?</Text>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={navigationRegister}>
          <Text style={{textDecorationLine: 'underline'}}>Register</Text>
        </TouchableOpacity>
      </View>
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
