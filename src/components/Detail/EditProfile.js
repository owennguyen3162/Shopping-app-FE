import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
import axios from 'axios';

const EditProfile = ({navigation, route}) => {
  const theme = useSelector(theme => theme.SwitchColor);
  const {name, phone, address, image} = route.params;
  const [Name, setName] = React.useState(name);
  const [Address, setAdress] = React.useState(address);
  const [imageLib, setImage] = React.useState(image);
  const [userId, setUserId] = React.useState(null);

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    };
    const result = await launchImageLibrary(options);
    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append('name', Name);
    formData.append('address', Address);
    formData.append('userImage', {
      uri: imageLib,
      name: 'imageFromMobile.jpg',
      type: 'image/jpg',
    });
    try {
      const data = await instance.put(`/api/user/${userId}`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      if(data.status === 200){
        Alert.alert('Notification', 'Edit successfully', [{text: 'OK', style: 'cancel', onPress: () => navigation.goBack()}]);
      }
    } catch (error) {
      Alert.alert('Notification', 'Edit fail', [{text: 'OK', style: 'cancel'}]);
    }
  };

  React.useEffect(() => {
    getUserId()
      .then(res => setUserId(res))
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
          EDIT PROFILE
        </Text>

        <Pressable onPress={() => handleEdit()}>
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
        <Pressable onPress={() => openCamera()}>
          <Image
            source={{
              uri: imageLib,
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
            }}
          />
        </Pressable>
        <TextInput
          style={
            theme.color === 'white'
              ? [Style.textInput, {marginTop: 20, color: 'black'}]
              : [Style.textInputDark, {marginTop: 20, color: 'white'}]
          }
          value={phone}
          editable={false}
        />
        <TextInput
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          value={Name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          value={Address}
          onChangeText={text => setAdress(text)}
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
    height: 45,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 10,
    marginVertical: 8,
    paddingLeft: 10,
  },
  textInputDark: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 10,
    marginVertical: 8,
    color: 'white',
    paddingLeft: 10,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
export default EditProfile;
