import React, {useRef} from "react";
import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "./useCart";
import Timer from "./Timer";
import useTimer from "./hooks/UseTimer";
import useTimerRef from "./hooks/UseTimerRef";
import useOpeningStatus from "./hooks/UseOpeningStatus";
import { useNavigation } from "@react-navigation/native";
const PromotionBanner = () => (
  <View style={styles.promotionContainer}>
    <Image
      source={{
        uri: "https://imgs.search.brave.com/kHBwSfbtnES9g8_prO69wyEGFHS8dPdAhk9cyVWGjLs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTA3Ny8xMDc3/MjIxLnBuZw", 
      }}
      style={styles.promotionImage}
    />
    <View style={styles.promotionTextContainer}>
      <Text style={styles.promotionTitle}>Promotion spéciale aujourd'hui !</Text>
      <Text style={styles.promotionDescription}>
        Économisez 20% sur votre commande avec le code PROMO20.
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  closedContainer: {
    opacity: 0.5, // Griser le restaurant fermé en réduisant l'opacité
  },
  closedContainer: {
    opacity: 0.5, // Opacité réduite pour les restaurants fermés
  },
  
  promotionContainer: {
    marginBottom:10,
    marginTop: 10,
    padding: 15,
    backgroundColor: "#32CD32", // Couleur jaune similaire à UberEats
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  promotionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  promotionTextContainer: {
    flex: 1,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  promotionDescription: {
    fontSize: 14,
    color: "black",
  },
  AddButton:{
    marginLeft: 10,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
  },
  addButtonText: {
    backgroundColor:'#eee',
    fontWeight: "bold",
    color: 'black',
    fontSize: 16,
  },
  RestaurantImage: {
    borderRadius:10,
  },
  
});

export default function RestaurantItems({ showPromotion, addToCart, removeFromCart, openingHours}) {
  const timerRef = useRef(0);
  const remainingTime = useTimer(500);
  const isOpen = useOpeningStatus(openingHours);
  const navigation = useNavigation();

  
  
  
  return (
    <TouchableOpacity activeOpacity={0.5} style={{ marginBottom: 30 }}>
       <View style={[styles.container, !isOpen && styles.closedContainer]}>
        
        {isOpen ? (
          <Text style={{ color: 'green' }}>Ouvert</Text>
        ) : (
          <Text style={{ color: 'red' }}>Fermé</Text>
        )}
        <RestaurantImage />{/* ... Autres éléments du restaurant ... */}
        
        <RestaurantInfo />
        {showPromotion && <PromotionBanner />}<Timer
          
          timer={remainingTime}
          title={"Votre offre expire dans :"}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <TouchableOpacity onPress={addToCart} style={styles.AddButton}>
            <Text style={styles.addButtonText}>Ajouter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removeFromCart} style={styles.AddButton}>
            <Text style={styles.addButtonText}>Retirer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}



const RestaurantImage =() =>(
  <><Image
    source={{
      uri: "https://imgs.search.brave.com/VPfCetOPcbHXrR88zX07ufeNRdZ-_Ry9_hfTGxg-NhA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFyaXNlbm1ldHJv/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wMS9rZmNf/cmVwdWJsaXF1ZV8w/NzUwNTYwMF8xNDIw/MDM5OTYtMTg2NHgx/MDQ4LmpwZw"
    }}
    style={{ width: "100%", height: 180 }} />
    <TouchableOpacity style={{position:'absolute',right:20, top:20}}> 
      <MaterialCommunityIcons name='heart-outline' size={25} color="white"/> 
      
    </TouchableOpacity></> 
)

const RestaurantInfo =() =>(
  <View style={{flexDirection:"row",
   justifyContent:"space-between", 
   alignItems:'center',
   marginTop:10}}
   >
    <View>
    <Text style={{fontSize:15, fontWeight:"bold"}}>KFC Place de la République</Text>
    <Text style={{fontSize: 13, color:"gray"}}>15-20 .min</Text>
    </View>
    <View 
    style={{
      backgroundColor:"#eee", 
      height:30,width:30, 
      alignItems:"center",
      justifyContent:"center",
      borderRadius:15}}
      
      >
    <Text>4.2</Text>
    </View>
  </View>
)
    
