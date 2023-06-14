import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import Modal from 'react-native-modal';

export default BottomSheet = props => {
  const {value, removeItem} = props;
  const [isModalVisible, setModalVisible] = React.useState(false);
// console.log("VAO DAY R NE"+value);
    React.useEffect(() => {
      toggleModal(value);
    }, [value]);

  const toggleModal = (value) => {
    setModalVisible(value);
  };
  const handleDelete = () =>{
    removeItem();
  }
  return (
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
            <Pressable onPress={() => handleDelete()}>
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
                style={{width: 35, height: 35}}
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
                  style={{width: 35, height: 35}}
                />
                <Text style={Style.text}>Cancel</Text>
              </View>
            </Pressable>

            <View style={Style.line}></View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const Style = StyleSheet.create({
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
    fontSize: 18,
    paddingVertical: 25,
    marginLeft: 20,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
});
