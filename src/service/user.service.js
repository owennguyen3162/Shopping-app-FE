import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUser = async id => {
  try {
    const userId = JSON.stringify(id);
    await AsyncStorage.setItem('userId', userId);
  } catch (error) {
    console.log('set User id failed' + error);
  }
};

export const getUserId = async () => {
  try {
    const id = await AsyncStorage.getItem('userId');
    const data = await JSON.parse(id);
    if (data) {
      return data;
    }
  } catch (error) {
    console.log('get User id failed' + error);
  }
};

export const removeCurrentUser = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('get User id failed' + error);
  }
};
