import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
import {getUserId} from '../../service/user.service';
import {ActivityIndicator} from 'react-native-paper';
const Account = ({navigation}) => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      const json = await instance.get(`/api/user/${await getUserId()}`);
      setData(json.data.data);
    } catch (error) {
      Alert.alert('warning', 'server error', [{text: 'ok', style: 'cancel'}]);
    } finally {
      setIsLoading(false);
    }
  };
  const theme = useSelector(state => state.SwitchColor);
  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <StatusBar hidden={true} />
      <View style={Style.header}>
        <Text style={theme.color === 'white' ? Style.text : Style.textDark}>
          ACCOUNT
        </Text>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828859.png',
            }}
            style={theme.color === 'white' ? Style.image : Style.imageDark}
          />
        </Pressable>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={Style.showInfor}>
            <Image
              source={{uri: data.image}}
              resizeMode="stretch"
              style={Style.avatar}
            />
            <View style={Style.contentParent}>
              <View>
                <Text
                  style={
                    theme.color === 'white'
                      ? Style.textName
                      : Style.textNameDark
                  }>
                  {data.name}
                </Text>
                <Text
                  style={
                    theme.color === 'white'
                      ? Style.textPhone
                      : Style.textPhoneDark
                  }>
                  {data.phone}
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('EditProfile',{image: data.image, name: data.name, address: data.address, phone: data.phone})}>
                <Text style={Style.buttonEditProfile}>EDIT PROFILE</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex: 3, width: '100%'}}>
            <Pressable onPress={() => navigation.navigate('OrderHistory')}>
              <View style={Style.content}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/128/2140/2140695.png',
                    }}
                    style={
                      theme.color === 'white' ? Style.icon : Style.iconDark
                    }
                  />
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.orderText
                        : Style.orderTextDark
                    }>
                    Order History
                  </Text>
                </View>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/2722/2722985.png',
                  }}
                  style={theme.color === 'white' ? Style.icon : Style.iconDark}
                />
              </View>
            </Pressable>
            <View style={Style.line}></View>
            <Pressable onPress={() => navigation.navigate('OrderHistory')}>
              <View style={[Style.content, {marginTop: 20}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/3585/3585229.png',
                    }}
                    style={
                      theme.color === 'white' ? Style.icon : Style.iconDark
                    }
                  />
                  <Text
                    style={
                      theme.color === 'white'
                        ? Style.orderText
                        : Style.orderTextDark
                    }>
                    Change Password
                  </Text>
                </View>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/2722/2722985.png',
                  }}
                  style={theme.color === 'white' ? Style.icon : Style.iconDark}
                />
              </View>
            </Pressable>
          </View>
        </>
      )}
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
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 25,
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textDark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
  imageDark: {
    width: 25,
    height: 25,
    resizeMode: 'center',
    tintColor: 'white',
  },
  showInfor: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {width: 120, height: 120, borderRadius: 100},
  textName: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  textNameDark: {fontSize: 18, fontWeight: 'bold', color: 'white'},
  textPhone: {fontSize: 18, color: 'black'},
  textPhoneDark: {fontSize: 18, color: 'white'},
  line: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'silver',
    marginTop: 20,
  },
  orderText: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  orderTextDark: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  icon: {width: 35, height: 35},
  iconDark: {width: 35, height: 35, tintColor: 'white'},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  buttonEditProfile: {
    textAlign: 'center',
    width: 150,
    height: 40,
    lineHeight: 38,
    backgroundColor: 'darkorchid',
    borderRadius: 3,
    fontWeight: '400',
    color: 'white',
  },
  contentParent: {
    marginLeft: 30,
    height: '65%',
    justifyContent: 'space-between',
  },
});
export default Account;
