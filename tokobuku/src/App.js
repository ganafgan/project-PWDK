import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers';

// KERJAKAN BAGIAN APP.JS
const mystore = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={mystore}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
