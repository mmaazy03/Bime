import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import R from '@theme';
import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import {getFriendById} from '@store/services/apis';
import {Icon, Image, ScreenBoiler, ScrollContainer, Text} from '@components';
import {IUser} from '@types';
import {UserPin} from '@assets';

const FriendDetailsScreen = () => {
  const {params} = useRoute<
    RouteProp<
      {
        params: {
          friendId: string;
        };
      },
      'params'
    >
  >();

  const {colors} = useTheme();
  const styles = style(colors);

  const [text, setText] = useState('');
  const [data, setData] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getFriendDetails();
  }, []);

  const getFriendDetails = async () => {
    const response = await getFriendById(params?.friendId);
    if (response?.data) {
      setData(response?.data);
    }
    setIsLoading(false);
  };

  const sendFriendRequest = () => {};

  return (
    <ScreenBoiler
      isSubHeader
      mainHeading={`Friend ${data?.name}`}
      isBack={false}>
      <ScrollContainer>
        <View style={R.styles.contentView}>
          <Image customImage={UserPin} containerStyles={styles.profileImage} />

          <TouchableOpacity activeOpacity={0.7}>
            <Icon
              name={'message'}
              type={'MaterialCommunityIcons'}
              size={40}
              color={'red'}
            />
          </TouchableOpacity>

          <Text
            variant={'body2'}
            font={'PoppinsBold'}
            color={R.color.black}
            gutterBottom={20}
            numberOfLines={1}
            align={'left'}
            transform={'none'}>
            Name : {data?.name}
          </Text>
          <Text
            variant={'body2'}
            font={'PoppinsBold'}
            color={R.color.black}
            numberOfLines={1}
            gutterBottom={20}
            align={'left'}
            transform={'none'}>
            EMAIL : {data?.email}
          </Text>
          <Text
            variant={'body2'}
            font={'PoppinsBold'}
            color={R.color.black}
            // numberOfLines={1}
            align={'left'}
            transform={'none'}>
            {data?.fcmToken}
          </Text>
        </View>
      </ScrollContainer>
    </ScreenBoiler>
  );
};

export default FriendDetailsScreen;

const style = (colors: any) => {
  return StyleSheet.create({
    profileImage: {
      width: R.unit.scale(120),
      height: R.unit.scale(120),
      borderRadius: R.unit.scale(120),
      borderColor: colors.black,
      borderWidth: R.unit.scale(2),
      marginBottom: R.unit.scale(10),
    },
  });
};
