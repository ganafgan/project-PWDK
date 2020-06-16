import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './router/RegisterLoginRouter';
import InitialRouter from './router/InitialRouter';

// KERJAKAN BAGIAN APP.JS

const App = () => {
  return (
    <NavigationContainer>
      <InitialRouter/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
