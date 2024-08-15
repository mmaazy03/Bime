import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';
import store from '../index';
import {userLogin} from '@store/user/userSlice';
import {authLogin} from '@store/auth/authSlice';

interface ILogin {
  email: string;
  name: string;
  password: string;
}

interface IUser {
  _id: string;
  createdAt: string;
  email: string;
  emailVerified: boolean;
  fcmToken: string;
  name: string;
  token: string;
}

const login = async (reqData: ILogin) => {
  try {
    const {email, password, name} = reqData;

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        createNewUser({...res, email, password, name});
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          loginAlreadyCreatedUser(reqData);
        }
      });
  } catch (error) {
    console.log('ERROR', error);
  }
};

const createNewUser = async (response: any) => {
  try {
    const {email, name} = response;
    const fcmToken = await messaging().getToken();
    const idToken = await response.user.getIdToken();

    const userId = response?.user?.uid;

    const userData = {
      _id: userId,
      createdAt: response?.user?.metadata?.creationTime,
      emailVerified: response?.user?.emailVerified,
      token: idToken,
      email,
      name,
      fcmToken,
    };

    await database()
      .ref(`users/${userId}`)
      .set(userData)
      .then(res => console.log('Data set.', res));

    userData && store.dispatch(userLogin(userData));
    userData && store.dispatch(authLogin(userData));
  } catch (error) {
    throw new Error('Unable to create user.');
  }
};

const loginAlreadyCreatedUser = async (reqData: ILogin) => {
  try {
    const {email, password} = reqData;

    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    const fcmToken = await messaging().getToken();
    const idToken = await user.getIdToken();

    let response: any = undefined;
    await database()
      .ref(`users/${user?.uid}`)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        response = {...snapshot.val()};
      });

    response = {...response, fcmToken, token: idToken};

    await database()
      .ref(`users/${user?.uid}`)
      .update(response)
      .then(() => console.log('Data updated.'));

    response && store.dispatch(userLogin(response));
    response && store.dispatch(authLogin(response));
  } catch (error) {
    console.error('Error checking or creating user:', error);
    throw new Error('Unable to check or create user.');
  }
};

const getAllFriends = async () => {
  try {
    console.log('PR');
    let response: IUser[] = [];
    const loggedInUserId = store.getState().user.user._id;
    console.log('loggedInUserId', loggedInUserId);

    await database()
      .ref('users')
      .once('value')
      .then(snapshot => {
        response = [...Object.values(snapshot.val())];
      });

    const friends = response?.filter(({_id}) => _id !== loggedInUserId);

    return {
      status: 200,
      data: friends,
    };
  } catch (error) {
    throw new Error('Unable to create user.');
  }
};

const getFriendById = async (_id: string) => {
  try {
    console.log('PR', _id);
    let response: IUser | undefined = undefined;

    await database()
      .ref(`/users/${_id}`)
      .once('value')
      .then(snapshot => {
        console.log(':', snapshot.val());
        response = snapshot.val();
      });

    console.log('RE', response);

    return {
      status: 200,
      data: response,
    };
  } catch (error) {
    throw new Error('Unable to create user.');
  }
};

export {login, getAllFriends, getFriendById};
