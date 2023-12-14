import React, { FC , useState, useRef } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
import useCart from '../components/useCart';
import Timer from '../components/Timer';
import useTimer from '../components/hooks/UseTimer';
import useTimerRef from '../components/hooks/UseTimerRef';
import { useCartContext } from '../components/CartContext';
import { useNavigation } from '@react-navigation/native';
import useOpeningStatus from '../components/hooks/UseOpeningStatus';
import { CartProvider } from '../components/CartContext';

export default function Home() {
  const [showPromotion, setShowPromotion] = useState(true);
  const { cartTotal, addToCart, removeFromCart, getTotalItems } = useCartContext();
  const remainingTime = useTimer(500);
  const timerRef = useRef(0); // Initialize ref
  useTimerRef(120, timerRef);
  const navigation = useNavigation();
  const isOpen = useOpeningStatus();
  // const handleLoginPress = () => {
  //   navigation.navigate('LoginScreen');
  // };
  
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
     
        <HeaderTabs />
       
        <SearchBar />
        {/* Afficher le bouton de connexion */}
        
        {/* Afficher le total du caddie dans le header */}
        {/* Afficher le total du caddie dans le header */}
        
        {/* //<Button title="Total du panier :"> {cartTotal}</Button> */}
        
        <Timer
          timer={timerRef.current}
          title={"Livraison offerte pendant :"}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {/* Passer les fonctions addToCart et removeFromCart à RestaurantItems */}
        <RestaurantItems showPromotion={showPromotion} addToCart={addToCart} removeFromCart={removeFromCart} openingHours={isOpen} />
        <RestaurantItems  showPromotion={showPromotion} addToCart={addToCart} removeFromCart={removeFromCart}openingHours={isOpen} />
        <RestaurantItems showPromotion={showPromotion} addToCart={addToCart} removeFromCart={removeFromCart}openingHours={isOpen} />
        
      </ScrollView>
    </SafeAreaView>
  );
}


