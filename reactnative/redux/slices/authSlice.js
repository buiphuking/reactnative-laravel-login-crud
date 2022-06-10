import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import loginApi from '../../api/loginApi';

export const getLogin = createAsyncThunk('user/login', async () => {
  await fetch('http://192.168.1.2:8000/api/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({mssv: mssv, password: password}),
  })
    .then(res => res.json())
    .then(resData => {
      if (resData.token !== undefined && resData.token !== null) {
        return token;
      }
      // alert(resData.token);
    });
});

const authSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isLoggedIn: null,
  },
  reducers: {
    setSignIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
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

export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;

// const {reducer: authReducer} = authSlice;

export default authReducer;
