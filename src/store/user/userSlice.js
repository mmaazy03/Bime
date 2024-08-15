import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  userToken: undefined,
  paymentMethod: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogin: (state, {payload}) => {
      console.log('P', payload);
      state.user = payload;
      state.userToken = payload.token;
    },
    updateUser: (state, {payload}) => {
      state.user = payload;
    },
    updateUserToken: (state, {payload}) => {
      state.userToken = payload;
    },
    userLogOut: state => {
      state.user = undefined;
      state.userToken = undefined;
    },
  },
  extraReducers: builder => {},
});

export const {userLogin, updateUser, updateUserToken, userLogOut} =
  userSlice.actions;

export default userSlice.reducer;
