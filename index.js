/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18nInit from './src/i18n/config/i18n.config'; // <-- this line added
import {Provider} from 'react-redux';
import store from './src/store/index';
import messaging from '@react-native-firebase/messaging';
import {setBackgroundMessageHandler} from '@hooks';

messaging().setBackgroundMessageHandler(setBackgroundMessageHandler);

(async () => {
  const language = 'en';
  i18nInit(language);
  console.disableYellowBox = true;
  console.disableRedBox = true;
})();

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return null;
  }
  return <Main />;
}

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
