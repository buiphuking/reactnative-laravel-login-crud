//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AuthStack from './route/AuthStack';
import AuthedStack from './route/AuthedStack';
import AppRoute from './route/AppRoute';
import {store} from './redux/store';
const App = ({}) => {
  const [login, setLogin] = useState(false);
  // console.log(login);
  return (
    <Provider store={store}>
      <AppRoute />
      <StatusBar backgroundColor="transparent"></StatusBar>
    </Provider>
    // <NavigationContainer>
    //  <StatusBar backgroundColor="transparent"></StatusBar>
    //  {login ? <AuthedStack /> : <AuthStack />}
    //</NavigationContainer>
  );
};

export default App;
