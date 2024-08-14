import Config from 'react-native-config';
import {PLATFORM} from './PlatformSpecific';

export const ENV_VARIABLES = {
  ENV: Config.ENV,
  API_URL: Config.API_URL,
};
