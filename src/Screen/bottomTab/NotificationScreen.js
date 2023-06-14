import {View, Text, StyleSheet, FlatList, Alert, RefreshControl, Pressable, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import instance from '../../service/axios';
import {ActivityIndicator} from 'react-native-paper';
import {getUserId} from '../../service/user.service';
import ItemNotification from '../../components/Item/ItemNotification';
import Modal from 'react-native-modal';
const Notification = () => {
  const theme = useSelector(theme => theme.SwitchColor);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [notiId, setNotiId] = React.useState(null);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await instance.get(
        '/api/user/getNotification/' + (await getUserId()),
      );
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      Alert.alert('notification', 'error', [{text: 'OK', style: 'cancel'}]);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remvoteItem = async id => {
    setNotiId(id)
    toggleModal();
  };
  const handleRemoveItem = () => {
    toggleModal();
    Alert.alert('Notification', 'Are you sure ?', [
      {
        text: 'Yes',
        onPress: async () => {
          setIsLoading(true);
          try {
            const res = await instance.delete(`/api/user/deleteNotification/${notiId}`);
            if (res.status === 204) {
              getData();
            }
          } catch (error) {
            console.log(error);
          }
        },
      },
      {text: 'No', style: 'cancel'},
    ]);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View
      style={theme.color === 'white' ? Style.container : Style.containerDark}>
      <Text style={theme.color === 'white' ? Style.title : Style.titleDark}>
        NOTIFICATION
      </Text>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            keyExtractor={item => item.id}
            data={data}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({item}) => (
              <ItemNotification
                id={item.id}
                description={item.description}
                date={item.date}
                remvoteItem={remvoteItem}
              />
            )}
          />
           <Modal
            onBackdropPress={() => setModalVisible(false)}
            onBackButtonPress={() => setModalVisible(false)}
            isVisible={isModalVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={Style.modal}>
            <View style={Style.modalContent}>
              <View style={Style.center}>
                <View style={Style.barIcon} />

                <View style={{width: '100%'}}>
                  <Pressable onPress={() => handleRemoveItem()}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/3687/3687412.png',
                        }}
                        style={{width: 30, height: 30}}
                      />
                      <Text style={Style.text}>Delete</Text>
                    </View>
                  </Pressable>
                  <View style={Style.line}></View>
                  <Pressable onPress={toggleModal}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/463/463612.png',
                        }}
                        style={{width: 30, height: 30}}
                      />
                      <Text style={Style.text}>Cancel</Text>
                    </View>
                  </Pressable>

                  <View style={Style.line}></View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 13,
  },
  titleDark: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 13,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 20,
    marginLeft: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
});
export default Notification;
