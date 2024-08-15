import React from 'react';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import R from '@theme';
import {Image, Text} from '@components';
import {UserPin} from '@assets';
import {IUser} from '@types';
import {NavigationService} from '@services';
import {SCREEN_NAMES} from '@constants';

interface IFriendCard {
  data: IUser;
  fullList: IUser[];
  index: number;
}

const FriendCard = ({data, fullList, index}: IFriendCard) => {
  const {colors} = useTheme();
  const styles = style(colors);

  const {_id, name, email, createdAt}: IUser = data;

  const onPress = () => {
    NavigationService.navigate(SCREEN_NAMES.FriendDetailsScreen, {
      friendId: _id,
    });
  };

  return (
    <TouchableNativeFeedback
      delayPressIn={0.1}
      delayPressOut={0.1}
      delayLongPress={0.1}
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(R.color.gray, false, 300)}>
      <View style={styles.cardLayout}>
        <View
          style={[
            R.styles.twoItemsRow,
            {
              backgroundColor: R.color.shadedPrimaryColor1,
              paddingVertical: R.unit.scale(10),
              paddingHorizontal: R.unit.scale(16),
            },
          ]}>
          <Image customImage={UserPin} containerStyles={styles.profileImage} />

          <View style={styles.chatText}>
            <Text
              variant={'body2'}
              font={'PoppinsBold'}
              color={R.color.primaryColor1}
              numberOfLines={1}
              align={'left'}
              transform={'none'}>
              {name}
            </Text>
            <View style={R.styles.rowView}>
              <Text
                variant={'body4'}
                font={'PoppinsRegular'}
                color={R.color.black}
                numberOfLines={1}
                style={{flex: 0.95}}
                align={'left'}
                transform={'none'}>
                {email}
              </Text>
              <Text
                variant={'body4'}
                font={'PoppinsSemiBold'}
                color={R.color.black}
                align={'right'}
                transform={'none'}>
                {moment(createdAt).format('HH:mm')}
              </Text>
            </View>
          </View>
        </View>
        {index !== fullList?.length - 1 && <View style={styles.divider} />}
      </View>
    </TouchableNativeFeedback>
  );
};

export default FriendCard;

const style = (colors: any) => {
  return StyleSheet.create({
    cardLayout: {
      width: '100%',
      borderRadius: R.unit.scale(4),
    },
    profileImage: {
      width: R.unit.scale(55),
      height: R.unit.scale(55),
      borderRadius: R.unit.scale(55),
    },
    chatText: {
      marginLeft: R.unit.scale(5),
      flex: 1,
    },
    divider: {
      width: '100%',
      height: R.unit.scale(1),
      backgroundColor: R.color.inputFieldBordercolor,
      marginVertical: R.unit.scale(0),
    },
  });
};
