import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalAccessToken = async accessToken => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
  } catch (error) {
    console.log('set accessToken failed' + error);
  }
};

export const setLocalRefreshToken = async refreshToken => {
  try {
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.log('set refreshToken failed' + error);
  }
};

export const updateLocalAccessToken = async accessTokenNew => {
  try {
    await AsyncStorage.setItem('accessToken', accessTokenNew);
  } catch (error) {
    console.log('set accessTokenNew failed' + error);
  }
};

export const getLocalAccessToken = async () => {
  try {
    const data = await AsyncStorage.getItem('accessToken');
    if (data) {
      return data;
    }
  } catch (error) {
    console.log('get accessToken failed' + error);
  }
};

export const getLocalRefreshToken = async () => {
  try {
    const data = await AsyncStorage.getItem('refreshToken');
    if (data) {
      return data;
    }
  } catch (error) {
    console.log('get refreshToken failed' + error);
  }
};
