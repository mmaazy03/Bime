import {Linking, Platform} from 'react-native';
import uuid from 'react-native-uuid';
import notifee, {AndroidImportance} from '@notifee/react-native';
import {CONSTANTS, ENV_VARIABLES} from '@constants';
import moment from 'moment';

type TCoordinates = {
  latitude: number;
  longitude: number;
};

export const convertImageToBlobForAndroid = async (
  uri: string,
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // If successful -> return with blob
    xhr.onload = function () {
      resolve(xhr.response);
    };

    // reject on error
    xhr.onerror = function () {
      reject(new Error(`⚠️❗ Error converting image to blob`));
    };

    // Set the response type to 'blob' - this means the server's response
    // will be accessed as a binary object
    xhr.responseType = 'blob';

    // Initialize the request. The third argument set to 'true' denotes
    // that the request is asynchronous
    xhr.open('GET', uri, true);

    // Send the request. The 'null' argument means that no body content is given for the request
    xhr.send(null);
  });
};

//*** BLOB FUNCTIONS - END */

export const isAlphaNumeric = (input: string) => {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(input);
};

export const isNumeric = (input: number | string) => {
  const numericRegex = /^[0-9]*$/;
  // const numericRegex = /^[0-9]*\.?[0-9]*$/;
  return numericRegex.test(input);
};

export const keyExtractor = (item: any, index: number) => {
  return `key  ${index}`;
};

/**
 * @param {Function} showPermissionDeniedDialog Boolean to show custom permission alert if user denied permission, by default true.
 */

export const debounce = (
  callback: Function = () => {},
  wait: number = 3000,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    window.clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export const appLogger = (...arg: any) => {
  if (__DEV__) {
    console.log(...arg);
  }
};

export const generateId = () => {
  const id: number = uuid.v4();
  return id;
};

export const showOnlyDevelopment = () => {
  if (
    ENV_VARIABLES.ENV &&
    [CONSTANTS.development].includes(ENV_VARIABLES.ENV)
  ) {
    return true;
  }
  return false;
};

export const regexToCheckNumbers = (value: string) => {
  return /^\d+$/.test(value);
};

export const onThrowPushNotification = async (
  heading: string,
  message: string,
) => {
  let channelId = '';

  try {
    await notifee.deleteChannel('default');

    channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      vibration: true,
      sound: 'default',
      importance: AndroidImportance.HIGH,
      vibrationPattern: [300, 500],
    });
  } catch (error) {}

  await notifee.displayNotification({
    title: heading,
    body: message,

    data: {type: 'message'},
    android: {
      channelId,
      smallIcon: 'ic_small_icon',
      color: '#0013a0',
      pressAction: {
        id: 'default',
      },
      importance: AndroidImportance.HIGH,
      vibrationPattern: [300, 500],
    },
  });
};

export const formatTime = (date, format?: string) => {
  return moment(date).format(format);
};

export const redirectToAppSettings = () => {
  if (Platform.OS == 'ios') return Linking.openURL('app-settings:');
  return Linking.openSettings();
};
