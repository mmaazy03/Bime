import React, {useState, useCallback} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';
import {useSelector} from 'react-redux';
// import {useFocusEffect} from '@react-navigation/native';
import R from '@theme';
import {
  Text,
  TextInput,
  AuthBoiler,
  AuthFormScrollContainer,
  Button,
  AuthSwitch,
  PopUp,
} from '@components';
// import FormValidation from '@components/utils/FormValidation';

function LoginScreen(props) {
  const common = useSelector(state => state.common);
  const [authUser, setAuthUser] = useState({
    email: '',
    password: '',
  });
  const [errorField, setErrorField] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (text, key) => {
    setAuthUser(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     const backAction = () => {
  //       if (common?.isOnBoard) {
  //         BackHandler.exitApp();
  //         return true;
  //       }
  //     };

  //     const backHandler = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       backAction,
  //     );

  //     return () => backHandler.remove();
  //   }, [common?.isOnBoard]),
  // );

  const onSubmit = async () => {};

  return (
    <AuthBoiler>
      <AuthFormScrollContainer showAuthHeader={true}>
        <View style={styles.contentView}>
          <Text
            variant={'largeTitle'}
            font={'UbuntuMedium'}
            gutterTop={10}
            gutterBottom={20}
            color={R.color.white}
            align={'left'}
            transform={'none'}>
            Sign in
          </Text>

          <Text
            variant={'body3'}
            font={'PoppinsRegular'}
            gutterTop={10}
            gutterBottom={40}
            color={R.color.white}
            align={'center'}
            transform={'none'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <TextInput
            secureText={false}
            onChangeText={text => {
              onChange(text, 'email');
            }}
            title={'Email'}
            titleColor={R.color.white}
            placeholder={'Enter email....'}
            width={'100%'}
            color={R.color.black}
            value={authUser['email']}
            gutterBottom={24}
            formErrorText={errorField['email']}
            errorColor={R.color.red}
          />

          <Button
            value="Sign in"
            bgColor={R.color.primaryColor1}
            width={'30%'}
            size={'bsm'}
            gutterBottom={36}
            color={R.color.white}
            loader={isLoading}
            disabled={isLoading}
            loaderColor={R.color.white}
            onPress={onSubmit}
          />

          <View style={styles.buttonView}>
            <Text
              variant={'body3'}
              font={'PoppinsRegular'}
              color={R.color.white}
              align={'right'}
              transform={'none'}>
              Forget Password
            </Text>
          </View>
          <AuthSwitch
            text={"If you don't have an account?"}
            linkText={'SignUp'}
            textColor={R.color.white}
            screen={'SelectRole'}
          />
        </View>
      </AuthFormScrollContainer>
    </AuthBoiler>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: R.color.primaryColor2,
    paddingHorizontal: R.unit.scale(10),
  },
  buttonView: {
    width: '100%',
    alignSelf: 'flex-end',
    marginBottom: R.unit.scale(48),
  },
});
