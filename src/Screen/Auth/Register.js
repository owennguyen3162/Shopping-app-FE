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
const Register = ({navigation}) => {
  const navigationLogin = () => {
    navigation.goBack();
  };
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />
      <Image source={require('../../public/image/avata.png')} style={Style.image} />
      <TextInput style={Style.textInput} placeholder="Email" />
      <TextInput style={Style.textInput} placeholder="Name" />
      <TextInput style={Style.textInput} placeholder="Password" />
      <TextInput style={Style.textInput} placeholder="RePassword" />

      <TouchableOpacity style={Style.button}>
        <Text style={Style.fontLogin}>REGISTER</Text>
      </TouchableOpacity>
      <View style={Style.row}>
        <Text>You have an account ?</Text>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={navigationLogin}>
          <Text style={{textDecorationLine: 'underline'}}>Login</Text>
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
  }
});

export default Register;
