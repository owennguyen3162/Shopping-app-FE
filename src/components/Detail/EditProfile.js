import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const EditProfile = ({navigation, route}) => {
  const theme = useSelector(theme => theme.SwitchColor);
  const {name, phone, address, image} = route.params;
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
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

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5996/5996831.png',
          }}
          style={Style.iconEditDark}
          resizeMode="center"
        />
      </View>
      <View
        style={{marginTop: 30, flex: 1, width: '100%', alignItems: 'center'}}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
          }}
        />
        <TextInput
          style={
            theme.color === 'white'
              ? [Style.textInput, {marginTop: 20}]
              : [Style.textInputDark, {marginTop: 20}]
          }
          value={phone}
        />
        <TextInput
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          value={name}
        />
        <TextInput
          style={
            theme.color === 'white' ? Style.textInput : Style.textInputDark
          }
          value={address}
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
});
export default EditProfile;
