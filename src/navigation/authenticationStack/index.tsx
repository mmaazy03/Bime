import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {OnBoarding, Login} from '@pages';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName={common?.isOnBoard ? 'Login' : 'OnBoard'}
        initialRouteName={'Login'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoard" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
