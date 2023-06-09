import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import instance from '../../service/axios';
import messaging from '@react-native-firebase/messaging';
const Register = ({navigation}) => {
  const navigationLogin = () => {
    navigation.goBack();
  };
  const [phone, setphone] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [verify, setVerify] = React.useState(null);

  const handleRegister = async () => {
    if (!phone || !name || !password || !verify) {
      return Alert.alert('Warning', 'Please enter enough information', [
        {text: 'OK', style: 'cancel'},
      ]);
    }
    if (password !== verify) {
      return Alert.alert('Warning', 'Verify not match password', [
        {text: 'OK', style: 'cancel'},
      ]);
    }

    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      const res = await instance.post('/api/user/createAccount', {
        phone,
        name,
        password,
        token,
      });
      if (res.status === 201) {
        Alert.alert('Notification', 'Register successfully', [
          {text: 'OK', style: 'cancel'},
        ]);
      }
    } catch (error) {
      Alert.alert('Notification', 'Register Fail', [
        {text: 'OK', style: 'cancel'},
      ]);
    }
  };
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />
      <Image
        source={require('../../public/image/avata.png')}
        style={Style.image}
      />
      <TextInput
        style={Style.textInput}
        placeholder="phone"
        onChangeText={text => setphone(text)}
      />
      <TextInput
        style={Style.textInput}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={Style.textInput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={Style.textInput}
        placeholder="Verify"
        onChangeText={text => setVerify(text)}
        secureTextEntry
      />

      <TouchableOpacity style={Style.button} onPress={() => handleRegister()}>
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
  },
});

export default Register;
