import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationService} from '@services';
import {SCREEN_NAMES} from '@constants';
import R from '@theme';
import {useNetInfo} from '@react-native-community/netinfo';

import Icon from '../Icon';
export const NetworkLoggerWidget: React.FC = () => {
  const {isConnected, isInternetReachable} = useNetInfo();

  return (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate(SCREEN_NAMES.NetworkLoggerView);
      }}
      style={{
        position: 'absolute',
        bottom: R.unit.height(0.95),
        alignSelf: 'flex-start',
        left: R.unit.width(0.5),
        top: R.unit.scale(70),
        height: R.unit.scale(30),
        width: R.unit.scale(30),
        zIndex: 99999,
      }}>
      <Icon
        name={
          isConnected && isInternetReachable
            ? 'server-network'
            : 'server-network-off'
        }
        type={'MaterialCommunityIcons'}
        color={'black'}
        size={R.unit.scale(30)}
      />
    </TouchableOpacity>
  );
};
