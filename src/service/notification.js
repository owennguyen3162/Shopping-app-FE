import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
const showNotification = (channel_Id, data) => {
  PushNotification.localNotification({
    /* Android Only Properties */
    channelId: channel_Id,
    smallIcon: data.notification.android.imageUrl,
    largeIconUrl:
      'https://booster.io/wp-content/uploads/custom-order-numbers-e1438361586475.png',
    // bigPictureUrl: data.notification.android.imageUrl,
    // bigLargeIcon: data.notification.android.imageUrl,
    // bigLargeIconUrl: data.notification.android.imageUrl,
    color: 'green',
    vibrate: true,
    vibration: 300,
    priority: 'high',
    title: data.notification.title,
    message: data.notification.body,
    invokeApp: true,
  });
};
const createChannel = channel_Id => {
  PushNotification.createChannel(
    {
      channelId: channel_Id, // (required)
      channelName: 'My channel', // (required)
      soundName: 'default',
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};

const navigateWithNotification = (navigation, remoteMessage) => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    navigation.navigate(remoteMessage.data.type);
  });
};
export {
  requestUserPermission,
  showNotification,
  createChannel,
  navigateWithNotification,
};
