import R from '@theme';
import {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  FadeOutUp,
  SlideInDown,
  SlideInRight,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
} from 'react-native-reanimated';
import uuid from 'react-native-uuid';

export const CONSTANTS = {
  ANIMATION: {
    UNIQUE_KEY: uuid.v4().toString(),
    FADE_IN: FadeIn.duration(500),
    FADE_IN_LEFT: FadeInLeft.duration(500),
    FADE_IN_RIGHT: (duration = 1000) => FadeInRight.duration(duration),
    FADE_IN_UP: FadeInUp.duration(500),
    FADE_IN_DOWN: FadeInDown.duration(500),
    FADE_OUT: FadeOut.duration(500),
    FADE_OUT_LEFT: FadeOutLeft.duration(500),
    FADE_OUT_RIGHT: FadeOutRight.duration(500),
    FADE_OUT_UP: FadeOutUp.duration(500),
    FADE_OUT_DOWN: FadeOutDown.duration(500),
    SLIDE_IN_DOWN: SlideInDown.duration(500),
    SLIDE_IN_UP: SlideInUp.duration(500),
    SLIDE_OUT_UP: SlideOutUp.duration(500),
    SLIDE_OUT_DOWN: SlideOutDown.duration(500),
    SLIDE_IN_RIGHT: SlideInRight.duration(150),
  },
  STOP_TRANSMISSION_STATUS: {
    null: null,
    pending: 'pending',
    successful: 'successful',
    failed: 'failed',
  },
  NETWORK_TIMEOUT_MESSAGE: 'Network Error',
  MAX_RETRIES_NETWORK_REQUEST: 2,
  RETRY_DELAY_NETWORK_REQUEST: 10000,
  IMAGE_FORMAT_TYPE: 'image/jpg',
  IMAGE_COMPRESSION_TYPES: {
    Lowest: {key: 'lowest', value: 0.0},
    Low: {key: 'Low', value: 0.25},
    Medium: {key: 'Medium', value: 0.5},
    High: {key: 'High', value: 0.75},
    Highest: {key: 'Highest', value: 1},
  },

  GROUPING_STOPS_SEQUENCE: 'Inapp',

  applicationThemes: {
    light: {
      id: 1,
      key: 'light',
    },
    dark: {
      id: 2,
      key: 'dark',
    },
    system: {
      id: 3,
      key: 'system',
    },
  },

  checked: 'checked',
  unchecked: 'unchecked',
  en: 'en',
  es: 'es',
  fr: 'fr',
  languageData: [
    {
      id: 1,
      label: 'English',
      status: 'checked',
      code: 'EN',
      value: 'en',
    },
    {
      id: 2,
      label: 'Spanish',
      status: 'unchecked',
      code: 'ES',
      value: 'es',
    },
    {
      id: 3,
      label: 'French',
      status: 'unchecked',
      code: 'FR',
      value: 'fr',
    },
  ],

  development: 'development',
  staging: 'staging',
  production: 'production',
  REST_METHOD: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },

  MAX_CONFIRM_STOPS: 6,
  MIN_CONFIRM_STOPS: 1,
  MAX_GEO_FENCE_DISTANCE: 100,
  DEFAULT_LATITUDE_DELTA: 0.12,

  distanceFilter: 500,
  chatsList: [
    {
      id: 1,
      title: 'Test 1',
    },
    {
      id: 2,
      title: 'Test 2',
    },
  ],
};
