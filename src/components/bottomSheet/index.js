import React from "react";
import { StyleSheet, View, Text } from "react-native"
import Modal from "react-native-modal";

export default BottomSheet = (props) => {
    const { value } = props
    const [isModalVisible, setModalVisible] = React.useState(false);

    React.useEffect(() => {
        toggleModal()
    }, [value])

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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
            style={Style.modal}
        >
            <View style={Style.modalContent}>
                <View style={Style.center}>
                    <View style={Style.barIcon} />
                    <View style={{ width: "100%" }}>
                        <Text style={Style.text}>Delete</Text>
                        <Text style={Style.text} onPress={toggleModal}>Cancel</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const Style = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#161616",
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 400,
        paddingBottom: 20,
    },
    center: {
        alignItems: "center",
    },
    barIcon: {
        width: 60,
        height: 5,
        backgroundColor: "#bbb",
        borderRadius: 3,
    },
    text: {
        color: "white",
        fontSize: 18,
        marginTop: 20,
        borderBottomWidth: 1, borderBottomColor: 'silver',
        paddingVertical: 15
    },
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
    },
})