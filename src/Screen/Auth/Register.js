import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import instance from '../../service/axios';
import messaging from '@react-native-firebase/messaging';
import {TextInput} from 'react-native-paper';
const Register = ({navigation}) => {
  const navigationLogin = () => {
    navigation.goBack();
  };
  const [phone, setphone] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [verify, setVerify] = React.useState(null);

  const [passwordStatus, setPasswordStatus] = React.useState(false);
  const [verifyStatus, setVerifyStatus] = React.useState(false);

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
      const res = await instance.post('/api/user/createAccount', {
        phone,
        name,
        password,
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
        mode="outlined"
        right={<TextInput.Icon icon="phone" />}
        style={Style.textInput}
        // textColor={theme.color === 'white' ? 'black' : 'white'}
        placeholder="Phone"
        value={phone}
        onChangeText={text => setphone(text)}
      />
      <TextInput
        mode="outlined"
        right={<TextInput.Icon icon="face-man-profile" />}
        style={Style.textInput}
        // textColor={theme.color === 'white' ? 'black' : 'white'}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        mode="outlined"
        right={
          <TextInput.Icon
            icon={passwordStatus ? 'eye' : 'eye-off'}
            onPress={() => setPasswordStatus(!passwordStatus)}
          />
        }
        style={Style.textInput}
        // textColor={theme.color === 'white' ? 'black' : 'white'}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        mode="outlined"
        right={
          <TextInput.Icon
            icon={verifyStatus ? 'eye' : 'eye-off'}
            onPress={() => setVerifyStatus(!verifyStatus)}
          />
        }
        style={Style.textInput}
        // textColor={theme.color === 'white' ? 'black' : 'white'}
        placeholder="Verify"
        value={verify}
        secureTextEntry
        onChangeText={text => setVerify(text)}
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
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    marginVertical: 8,
  },
  // textInputDark: {
  //   width: '100%',
  //   backgroundColor: 'black',
  //   color: 'white',
  //   marginVertical: 8,
  // },
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
