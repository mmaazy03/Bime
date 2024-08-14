import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import R from '@theme';
import {Icon} from '@components';
import {CoachesScreen, ChatList, Login, NetworkLoggerView} from '@pages';
import {SCREEN_NAMES} from '@constants';
import {NavigationService} from '@services';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const navigationRef = useNavigationContainerRef();

  const AppTabNavigation = () => {
    const {defaultTheme} = useSelector(state => state.common);

    useEffect(() => {
      NavigationService.setTopLevelNavigator(navigationRef);
    }, []);

    return (
      <NavigationContainer
        ref={navigationRef}
        theme={defaultTheme === 'dark' ? R.DarkTheme : R.LightTheme}>
        <Tab.Navigator
          initialRouteName={'ChatTab'}
          screenOptions={{
            headerShown: false,
            tabBarVisible: true,
          }}
          tabBarOptions={{
            showLabel: false,
            style: styles.tabContainer,
          }}>
          <Tab.Screen
            name="CommunityTab"
            component={CommunityStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={[styles.tab, focused && styles.focusedTab]}>
                  <Icon
                    name={'groups'}
                    type={'MaterialIcons'}
                    color={focused ? R.color.primaryColor1 : R.color.gray}
                    size={35}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="ChatTab"
            component={ChatStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={[styles.tab, focused && styles.focusedTab]}>
                  <Icon
                    name={'chat'}
                    type={'MaterialIcons'}
                    color={focused ? R.color.primaryColor1 : R.color.gray}
                    size={25}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  const CommunityStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Coaches'}>
        <Stack.Screen name="Coaches" component={CoachesScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.NetworkLoggerView}
          component={NetworkLoggerView}
        />
      </Stack.Navigator>
    );
  };

  const ChatStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ChatsList" component={ChatList} />
        <Stack.Screen
          name={SCREEN_NAMES.NetworkLoggerView}
          component={NetworkLoggerView}
        />
      </Stack.Navigator>
    );
  };

  return <AppTabNavigation />;
};
export default AppStack;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: R.color.primaryColor1,

    paddingBottom: 0,
    marginBottom: 0,
    height: R.unit.scale(70),
  },
  tab: {
    alignItems: 'center',
    width: R.unit.width(0.16),
    height: 50,
    justifyContent: 'center',
  },
  focusedTab: {
    backgroundColor: R.color.white,
    width: R.unit.width(0.16),
    borderRadius: R.unit.scale(10),
    // height: 50,
  },
});
