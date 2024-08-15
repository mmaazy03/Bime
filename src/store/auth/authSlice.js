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
      console.log(' authLogin payload', payload);
      state.isAuth = true;
    },
    changeRole: (state, {payload}) => {
      state.role = payload;
    },
    authLogout: state => {
      state.isAuth = false;
    },
  },
  extraReducers: builder => {},
});

export const {authLogin, authLogout, changeRole} = authSlice.actions;

export default authSlice.reducer;
