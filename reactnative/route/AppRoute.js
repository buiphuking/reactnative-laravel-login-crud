import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthedStack from './AuthedStack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../redux/slices/authSlice';

const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthedStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppRoute;
