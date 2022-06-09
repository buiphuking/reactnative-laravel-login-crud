import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import AppRoute from './route/AppRoute';
const App = ({}) => {
  return (
    <Provider store={store}>
      <AppRoute />
      <StatusBar backgroundColor="transparent"></StatusBar>
    </Provider>
  );
};

export default App;
