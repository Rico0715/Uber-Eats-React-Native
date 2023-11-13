import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
import useCart from '../components/useCart';

export default function Home() {
  const [showPromotion, setShowPromotion] = useState(true);
  const { cartTotal, addToCart, removeFromCart, getTotalItems } = useCart();

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
        {/* Afficher le total du caddie dans le header */}
        <Text>Total du panier : {cartTotal}</Text>
        {/* //<Button title="Total du panier :"> {cartTotal}</Button> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {/* Passer les fonctions addToCart et removeFromCart à RestaurantItems */}
        <RestaurantItems showPromotion={showPromotion} addToCart={addToCart} removeFromCart={removeFromCart} />
        <RestaurantItems  addToCart={addToCart} removeFromCart={removeFromCart} />
        <RestaurantItems showPromotion={showPromotion} addToCart={addToCart} removeFromCart={removeFromCart} />
      </ScrollView>
    </SafeAreaView>
  );
}
