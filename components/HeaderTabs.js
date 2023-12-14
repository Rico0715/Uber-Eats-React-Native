import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useCart from "./useCart";
import { useCartContext } from './CartContext';
import { useNavigation } from '@react-navigation/native';
// import LoginButton from "./LoginButton";
import LoginScreen from "../screens/Login";


export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Livraison");
  const { getTotalItems } = useCartContext();
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen'); // Assurez-vous que 'LoginScreen' est correctement configuré dans votre système de navigation
  };


  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={handleLoginPress}
      >
        <Text style={{ color: 'black', fontSize: 15, fontWeight: '900' }}>Login</Text>
      </TouchableOpacity>
      <HeaderButton
        text="Livraison"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        onPress={() => handleTabPress("Livraison")}
      />
      <HeaderButton
        text="A emporter"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        onPress={() => handleTabPress("A emporter")}
      />
      <TouchableOpacity style={styles.button}>
      
      <Text style={styles.buttonText}>{getTotalItems()}🧺</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    backgroundColor:'#eee',
    color: 'black',
    fontSize: 16,
  },
})
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
