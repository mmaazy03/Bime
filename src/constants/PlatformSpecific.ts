import {Platform} from 'react-native';
import Config from 'react-native-config';
import {THEME_CONSTANTS} from './ThemeConstants';

/**
 * Anything platform specific should be postfix capitalized with platform(ANDROID, IOS) e.g SCANDIT_ANDROID, SCANDIT_IOS
 * and then it should export from here.
 */
const CURRENT = Platform.OS.toUpperCase();
export const isAndroid = Platform.OS == 'android';
export const isIOS = Platform.OS == 'ios';
export const PLATFORM = {
  Current: {
    LICENSE_KEY: Config[`SDK_${CURRENT}`],
    PADDING_TOP: THEME_CONSTANTS[`SCREEN_WRAPPER_PADDING_TOP_${CURRENT}`],
  },
};
