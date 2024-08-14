import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOnBoard: false,
  inOnCoachSelected: false,
  selectedLanguage: 'en',
  defaultTheme: 'light',
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    onBoardCompleted: (state, {payload}) => {
      state.isOnBoard = true;
    },
    clearCommon: (state, {payload}) => {
      state.inOnCoachSelected = false;
    },
    switchTheme: (state, {payload}) => {
      state.defaultTheme = payload;
    },
  },
  extraReducers: builder => {},
});

export const {onBoardCompleted, clearCommon, switchTheme} = commonSlice.actions;

export default commonSlice.reducer;
