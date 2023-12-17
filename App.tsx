import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from"react";
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/Login';
import MonPanier from './screens/Panier';
import MenuPage from './screens/MenuPage';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './components/CartContext';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      { <Stack.Screen name="Mon Panier" component={MonPanier} />}
      { <Stack.Screen name="MenuPage" component={MenuPage} />}
      
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
