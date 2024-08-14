import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {Icon, Text} from '@components';
import R from '@theme';
import {NavigationService} from '@services';

const width = Dimensions.get('window').width;

const SubHeaderComponent = props => {
  const {navigation, isBack = true, mainHeading} = props;

  const goBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      {isBack && (
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.9}
          style={styles.backIcon}>
          <Icon
            type={'MaterialIcons'}
            name={'keyboard-arrow-left'}
            color={R.color.primaryColor1}
            size={30}
          />
        </TouchableOpacity>
      )}

      <View
        style={{
          alignItems: 'center',
          marginLeft: R.unit.scale(isBack ? 20 : 0),
        }}>
        {mainHeading && (
          <Text
            variant={'h6'}
            font={'PoppinsSemiBold'}
            color={R.color.white}
            align={'left'}
            transform={'capitalize'}>
            {mainHeading}
          </Text>
        )}
      </View>
    </View>
  );
};
export default SubHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(10),
    backgroundColor: R.color.primaryColor1,
    paddingVertical: R.unit.scale(20),
  },
  backIcon: {
    backgroundColor: R.color.white,
    height: R.unit.scale(30),
    width: R.unit.scale(30),
    borderRadius: R.unit.scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
