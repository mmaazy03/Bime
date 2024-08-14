import NetworkLogger from 'react-native-network-logger';

import * as React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

interface componentNameProps {}

const NetworkLoggerView = (props: componentNameProps) => {
  const theme = useColorScheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NetworkLogger theme={theme} />
    </SafeAreaView>
  );
};

export default NetworkLoggerView;
