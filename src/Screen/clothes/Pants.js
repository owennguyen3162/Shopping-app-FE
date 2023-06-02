import {View, Text, Button, StatusBar} from 'react-native';
import React from 'react';

const Pants = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden={true} />
      <Text>Notification Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Pants;
