import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  firstTimePop: false,
  userToken: '',
  role: 'Member',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    authLogin: (state, {payload}) => {
      state.isAuth = true;
    },
    changeRole: (state, {payload}) => {
      state.role = payload;
    },
    authLogout: (state, {payload}) => {
      state.isAuth = false;
      state.role = 'Member';
    },
  },
  extraReducers: builder => {},
});

export const {authLogin, authLogout, changeRole} = authSlice.actions;

export default authSlice.reducer;
