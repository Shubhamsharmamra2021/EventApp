
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { AuthStackNavigation, HomeStackNavigation } from './src/navigation/navigate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setLoaderState, setUserToken } from './src/redux/actions/userAction';
import { store } from './src/redux/store.js';
import MainLoader from './src/component/MainLoader';

const NavigationStack = () => {

  const { token, showLoader } = useSelector((store) => store.user);

  const dispatch = useDispatch()
  useEffect(() => {

    getTokenFromLocalStorage()
  }, [])

  async function getTokenFromLocalStorage() {
    dispatch(setLoaderState(true))

    try {

      const asyncToken = await AsyncStorage.getItem('@User_Token');
      console.log("Token : ", asyncToken)
      dispatch(setUserToken(asyncToken));

    } catch {

    } finally {
      dispatch(setLoaderState(false))

    }

  }

  return (
    <NavigationContainer>
      {token ? <HomeStackNavigation /> : <AuthStackNavigation />}
      {showLoader && <MainLoader />}
    </NavigationContainer>)
}

const App = () => {


  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
