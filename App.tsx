import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from"react";
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './components/CartContext';
import MenuPage from './components/MenuPage';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="Menu" component={MenuPage} /> */}
    </Stack.Navigator>
    </CartProvider>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
