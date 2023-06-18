import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import instance from '../../service/axios';
import {getUserId, removeCurrentUser} from '../../service/user.service';
import {TextInput} from 'react-native-paper';
import {_handleLogout} from '../../redux/action/auth.action';

const ChangePassword = ({navigation}) => {
  const theme = useSelector(theme => theme.SwitchColor);
  const [password, setPassword] = React.useState('');
  const [passwordNew, setPasswordNew] = React.useState('');
  const [verify, setVerify] = React.useState('');
  const [userId, setUserId] = React.useState(null);
  const [passwordStatus, setPasswordStatus] = React.useState(false);
  const [passwordNewStatus, setPasswordNewStatus] = React.useState(false);
  const [verifyStatus, setVerifyStatus] = React.useState(false);
  const dispatch = useDispatch();

  const handleChangePassword = async () => {
    if (!passwordNew || !verify || !password) {
      return Alert.alert('Notification', 'Empty Value !!', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }

    if (passwordNew !== verify) {
      return Alert.alert(
        'Notification',
        'The re-entered password is incorrect !!',
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
      );
    }

    try {
      const data = await instance.put(`/api/user/changePassword/${userId}`, {
        password: passwordNew,
        passwordOld: password,
      });
      if (data.status === 200) {
        Alert.alert(
          'Notification',
          'Password changed successfully, please login again',
          [
            {
              text: 'OK',
              style: 'cancel',
              onPress: () =>
                removeCurrentUser().then(res => dispatch(_handleLogout())),
            },
          ],
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Notification', 'Change failed', [
        {text: 'OK', style: 'cancel'},
      ]);
    }
  };

  React.useEffect(() => {
    getUserId()
      .then(id => setUserId(id))
      .catch(error => console.log(error));
  }, []);

  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <View style={Style.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2732/2732652.png',
            }}
            style={theme.color === 'white' ? Style.icon : Style.iconDark}
          />
        </Pressable>

        <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
          CHANGE PASSWORD
        </Text>

        <Pressable onPress={() => handleChangePassword()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5996/5996831.png',
            }}
            style={Style.iconEditDark}
            resizeMode="center"
          />
        </Pressable>
      </View>
      <View
        style={{marginTop: 30, flex: 1, width: '100%', alignItems: 'center'}}>
        <TextInput
          secureTextEntry={passwordStatus ? false : true}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={passwordStatus ? 'eye' : 'eye-off'}
              onPress={() => setPasswordStatus(!passwordStatus)}
            />
          }
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          placeholder="Password old"
          textColor={theme.color === 'white' ? 'black' : 'white'}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TextInput
          secureTextEntry={verifyStatus ? false : true}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={passwordNewStatus ? 'eye' : 'eye-off'}
              onPress={() => setPasswordNewStatus(!passwordNewStatus)}
            />
          }
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          textColor={theme.color === 'white' ? 'black' : 'white'}
          placeholder="Password new"
          onChangeText={text => setPasswordNew(text)}
          value={passwordNew}
        />
        <TextInput
          secureTextEntry={verifyStatus ? false : true}
          mode="outlined"
          right={
            <TextInput.Icon
              icon={verifyStatus ? 'eye' : 'eye-off'}
              onPress={() => setVerifyStatus(!verifyStatus)}
            />
          }
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          textColor={theme.color === 'white' ? 'black' : 'white'}
          placeholder="Verify"
          onChangeText={text => setVerify(text)}
          value={verify}
        />
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#111111',
  },
  icon: {width: 35, height: 35},
  iconDark: {width: 35, height: 35, tintColor: 'white'},
  iconEditDark: {width: 40, height: 40},
  title: {fontWeight: 'bold', fontSize: 17, color: 'black'},
  titleDark: {fontWeight: 'bold', fontSize: 17, color: 'white'},
  textInput: {
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    marginVertical: 8,
  },
  textInputDark: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    marginVertical: 8,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
export default ChangePassword;
