import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import R from '@theme';
import {AuthBoiler, Text, Button} from '@components';

function OnBoardingScreen(props) {
  const {navigation} = props;

  const dispatch = useDispatch();

  const onSubmit = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthBoiler>
      <View style={styles.contentView}>
        <Text
          variant={'h4'}
          font={'UbuntuMedium'}
          color={R.color.white}
          align={'left'}
          transform={'none'}>
          Welcome Boiler Plate
        </Text>

        <Button
          value={'Get Started'}
          bgColor={R.color.primaryColor1}
          width={'36%'}
          size={'sm'}
          gutterTop={15}
          rippleColor={R.color.shadedPrimaryColor1}
          color={R.color.white}
          borderColor={R.color.primaryColor1}
          loaderColor={R.color.white}
          onPress={onSubmit}
        />
      </View>
    </AuthBoiler>
  );
}
export default OnBoardingScreen;

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: 0,
    flex: 1,
    marginTop: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003039',
  },
  image: {
    height: '78%',
    width: '100%',
    borderRadius: 0,
    borderBottomLeftRadius: R.unit.scale(27),
    borderBottomRightRadius: R.unit.scale(27),
    justifyContent: 'center',
  },
  subContent: {
    paddingHorizontal: R.unit.scale(20),
    paddingTop: R.unit.scale(10),
    flex: 1,
  },
});
