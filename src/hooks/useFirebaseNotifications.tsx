import {useEffect} from 'react';
import notifee from '@notifee/react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import store from '@store/index';
import {IStops} from '@types';
import {appLogger, onThrowPushNotification} from '@utils';

interface NotificationData {
  stop?: IStops;
  title?: string;
  action?: string;
  body?: string;
}

const onNotificationReceived = (data: NotificationData) => {
  /* Checking if user is logged in */
  const isLoggedIn = store.getState().auth;
  if (isLoggedIn) {
    appLogger(`Notification Data ${JSON.stringify(data, null, 2)}`);

    const {action} = data;
  }
};

const setBackgroundMessageHandler = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  /* Handling Background Notifications */
  appLogger(`Background Notification ${JSON.stringify(remoteMessage)}`);

  const {data} = remoteMessage;
  if (data) onNotificationReceived(data);
};

const useFirebaseNotificationListener = () => {
  useEffect(() => {
    notifee.setBadgeCount(0);
    const pushNotificationSubscription = messaging().onMessage(
      async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        /* Handling Foreground Notifications */
        appLogger(
          `Foreground Notification ${JSON.stringify(remoteMessage, null, 2)}`,
        );

        const {data, notification} = remoteMessage;
        const title = notification?.title || 'GLSGo Notification';
        const body = notification?.body || 'GLSGo Notification';

        onThrowPushNotification(title, body);

        if (data) onNotificationReceived(data);
      },
    );

    return pushNotificationSubscription;
  }, []);
};

export {setBackgroundMessageHandler, useFirebaseNotificationListener};
