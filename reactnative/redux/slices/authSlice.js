import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getMe = createAsyncThunk('', async () => {
  const checkLogin = await loginApi.getMe();
  return checkLogin;
});

const authSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isLoggedIn: null,
  },
  reducers: {
    // setSignIn: (state, action) => {
    //   state.isLoggedIn = action.payload.isLoggedIn;
    // },
    // setSignOut: state => {
    //   state.isLoggedIn = false;
    // },
  },
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
    },
  },
});

// export const {setSignIn, setSignOut} = authSlice.actions;

// export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;

const {reducer: authReducer} = authSlice;

export default authReducer;
