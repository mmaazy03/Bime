import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import R from '@theme';
import {
  Text,
  TextInput,
  AuthBoiler,
  AuthFormScrollContainer,
  Button,
  PopUp,
} from '@components';
import {useTranslation} from 'react-i18next';
import {FormValidation} from '@utils';
import {login} from '@store/services';

function LoginScreen() {
  const common = useSelector(state => state.common);
  const {t} = useTranslation();
  const [authUser, setAuthUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [errorField, setErrorField] = useState({
    name: '',
    email: '',
    phoneNumber: '',
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

  const showErrorPopUp = error => {
    setIsLoading(false);

    PopUp({
      heading: error,
      type: 'danger',
    });
  };

  const onSubmit = async () => {
    try {
      // const formData: any = {};
      // const keys = Object.entries(authUser);

      // keys?.map(item => {
      //   formData[item[0]] = item[1];
      // });

      // const formError = FormValidation(formData);

      // if (formError) {
      //   let errorObject = {};

      //   formError?.errorArr?.map(item => {
      //     errorObject[item] = formError?.message;
      //   });

      //   for (let key in errorObject) {
      //     showErrorPopUp(errorObject[key]);
      //   }

      //   setErrorField(errorObject);
      // } else {
      await login({
        email: authUser?.email,
        password: authUser?.password,
        name: authUser?.name,
      });
      // }
    } catch (error) {
      PopUp({
        heading: error,
        type: 'danger',
      });
    }
  };

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
            Welcome to Chime
          </Text>

          <TextInput
            secureText={false}
            onChangeText={text => {
              onChange(text, 'name');
            }}
            title={'Name'}
            titleColor={R.color.white}
            placeholder={'Enter name....'}
            width={'100%'}
            color={R.color.black}
            value={authUser['name']}
            gutterBottom={24}
            formErrorText={errorField['name']}
            errorColor={R.color.red}
          />
          <TextInput
            secureText={false}
            onChangeText={text => {
              onChange(text, 'email');
            }}
            title={'Email'}
            titleColor={R.color.white}
            placeholder={'Enter Email....'}
            width={'100%'}
            color={R.color.black}
            value={authUser['email']}
            gutterBottom={24}
            formErrorText={errorField['email']}
            errorColor={R.color.red}
          />
          <TextInput
            secureText={false}
            onChangeText={text => {
              onChange(text, 'password');
            }}
            title={'Password'}
            titleColor={R.color.white}
            placeholder={'Enter Password....'}
            width={'100%'}
            color={R.color.black}
            value={authUser['password']}
            gutterBottom={24}
            formErrorText={errorField['password']}
            errorColor={R.color.red}
          />

          <Button
            value="Sign in"
            bgColor={R.color.primaryColor1}
            width={'30%'}
            gutterTop={50}
            size={'bsm'}
            gutterBottom={36}
            color={R.color.white}
            loader={isLoading}
            disabled={isLoading}
            loaderColor={R.color.white}
            onPress={onSubmit}
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
