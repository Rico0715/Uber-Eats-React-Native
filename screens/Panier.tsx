import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useCartContext } from '../components/CartContext';

export default function MonPanier() {
  const {getTotalItems } = useCartContext();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu Burger, Frites et Boissons</Text>
      <Text >Vous avez commandé {getTotalItems()} articles</Text>
      {/* Ajoutez ici le contenu de votre menu */}
    </View>
  );
}

