import AsyncStorage from '@react-native-async-storage/async-storage';

export const setColorToStorage = async color => {
  try {
    await AsyncStorage.setItem('Color', color);
  } catch (error) {
    console.log('Set error::: ' + error);
  }
};

export const getColorToStorage = async () => {
  try {
    const data = await AsyncStorage.getItem('Color');
    if (!data) {
      return 'white';
    }
    return data;
  } catch (error) {
    return 'white';
  }
};
