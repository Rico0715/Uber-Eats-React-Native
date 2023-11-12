import React, { useState } from 'react';
import {  Text, View,SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
export default function Home() {
    const [showPromotion, setShowPromotion] = useState(true);
    return(
        <SafeAreaView style={{backgroundColor:"#eee",flex:1}}> 
            <View style={{backgroundColor:'white',padding: 15}}>
            <HeaderTabs />
            <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            <Categories />
            <RestaurantItems showPromotion={showPromotion} />
        <RestaurantItems showPromotion={showPromotion} />
        <RestaurantItems showPromotion={showPromotion} />
            </ScrollView>
        </SafeAreaView>
    )
}