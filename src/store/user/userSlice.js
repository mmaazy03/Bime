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
      state.user = payload.user;
      state.userToken = payload.token;
    },
    updateUser: (state, {payload}) => {
      state.user = payload;
    },
    userDefaultPaymentMethod: (state, {payload}) => {
      state.paymentMethod = payload;
    },
    updateUserToken: (state, {payload}) => {
      state.userToken = payload;
    },
  },
  extraReducers: builder => {},
});

export const {
  userLogin,
  updateUser,
  updateUserToken,
  userDefaultPaymentMethod,
} = userSlice.actions;

export default userSlice.reducer;
