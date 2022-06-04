import {createSlice} from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auths',
  isLoggedIn: false,
  reducer: {
    login: (state, action) => {
      isLoggedIn: true;
    },
  },
});
