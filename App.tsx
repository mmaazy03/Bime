/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {LogBox, StyleSheet, SafeAreaView} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
// import toastConfig from '@theme';
import AppNavigation from '@navigation/index';
import {NetworkLoggerWidget} from '@components';

function App() {
  const config = {
    useSystemColorMode: true, // Default system color mode
  };

  const extendedTheme = extendTheme({config});

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreLogs(['EventEmitter.removeListener']); //X Ignore log notification by message
  LogBox.ignoreLogs([
    'A non-serializable value was detected in the state, in the path',
  ]); //X Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const AppWrapper = () => {
    return (
      <>
        <AppNavigation />
        {/* <Toast config={toastConfig} /> */}
      </>
    );
  };

  return (
    <NativeBaseProvider theme={extendedTheme}>
      <SafeAreaView style={{flex: 1}}>
        <AppWrapper />
        <NetworkLoggerWidget />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
