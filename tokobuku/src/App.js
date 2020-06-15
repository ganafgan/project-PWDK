import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './router';

// KERJAKAN BAGIAN APP.JS

const App = () => {
  return (
    <NavigationContainer>
		<Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
