import {useEffect, useRef, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import {isAndroid, isIOS} from '@constants';
import {onThrowPushNotification} from '../helpers';
import {AppState} from 'react-native';

const Notifications = () => {
  const appState = useRef(AppState.currentState);

  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [hasAppOpenedFromBackground, setHasAppOpenedFromBackground] =
    useState(false);

  useEffect(() => {
    requestTokenPermission();
    getFcmToken();
  }, []);

  // const pushNotificationEvents = {
  //   '-1': 'UNKNOWN',
  //   '0': 'DISMISSED',
  //   '1': 'PRESS',
  //   '2': 'ACTION_PRESS',
  //   '3': 'DELIVERED',
  //   '4': 'APP_BLOCKED',
  //   '5': 'CHANNEL_BLOCKED',
  //   '6': 'CHANNEL_GROUP_BLOCKED',
  //   '7': 'TRIGGER_NOTIFICATION_CREATED',
  //   '8': 'FG_ALREADY_EXIST',
  //   ACTION_PRESS: 2,
  //   APP_BLOCKED: 4,
  //   CHANNEL_BLOCKED: 5,
  //   CHANNEL_GROUP_BLOCKED: 6,
  //   DELIVERED: 3,
  //   DISMISSED: 0,
  //   FG_ALREADY_EXIST: 8,
  //   PRESS: 1,
  //   TRIGGER_NOTIFICATION_CREATED: 7,
  //   UNKNOWN: -1,
  // };

  useEffect(() => {
    // ?? IN ORDER TO HANDLE PUSH NOTIFICATIONS WILL USE THESE METHODS
    notifee.onForegroundEvent(({type, detail}) => {
      const data = detail?.notification?.data;

      if (isIOS) {
        switch (type) {
          case EventType.DELIVERED:
            break;

          case EventType.DISMISSED:
            break;

          case EventType.PRESS:
            notificationPress({...type, ...detail});

            break;
        }
      } else {
        if (type === 1) {
          // ?? IN ANDROID FOR FROEGROUND PUSH NOTIFICATION HANDLING WILL USE THIS
          notificationPress({...type, ...detail});
        }
      }
    });

    if (isIOS) {
      notifee.onBackgroundEvent(({type, detail}) => {
        const data = detail?.notification?.data;

        switch (type) {
          case EventType.DELIVERED:
            break;

          case EventType.DISMISSED:
            break;

          case EventType.PRESS:
            notificationPress({...type, ...detail});
            break;
        }
      });
    }
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setHasAppOpenedFromBackground(true);
      } else if (
        appState.current.match(/active/) &&
        nextAppState.match(/inactive|background/)
      ) {
        setHasAppOpenedFromBackground(false);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    notifee.setBadgeCount(0);
    const pushNotificationSubscription = messaging().onMessage(
      async remoteMessage => {
        const {data} = remoteMessage;
        const {title, body}: {title: string; body: string} = data;

        if (appStateVisible === 'active' || appStateVisible === 'unknown') {
          if (isIOS && !hasAppOpenedFromBackground) {
            onThrowPushNotification(title, body);
          } else {
            onThrowPushNotification(title, body);
          }
        }
      },
    );

    messaging().onNotificationOpenedApp(async remoteMessage => {
      // ?? RUN ANY ACTION WHEN YOU OPEN APPLICATION FROM PUSH NOTIFICATION IN BACKGROUND STATE (ONLY RUNS IN ANDROID)
      isAndroid && notificationPress(remoteMessage);
    });

    messaging()
      .getInitialNotification()
      // ?? RUN ANY ACTION WHEN YOU OPEN APPLICATION FROM PUSH NOTIFICATION IN QUIT STATE (ONLY RUNS IN ANDROID)
      .then(res => {
        if (res) {
          notificationPress(res);
        }
      })
      .catch(err => {});

    return pushNotificationSubscription;
  }, []);

  const notificationPress = data => {
    // ?? This function will run in case when notification is pressed in any state of both platforms
    // ?? left for future purposes
  };

  const requestTokenPermission = async () => {
    await notifee.requestPermission({sound: true});
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
    }
  };

  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
    } catch (error) {}
  };
};

export default Notifications;
