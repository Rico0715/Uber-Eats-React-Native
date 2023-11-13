import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useCart from "./useCart";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Livraison");
  const { getTotalItems } = useCart();

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
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
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: "black" }}>{getTotalItems()} articles</Text>
      </View>
    </View>
  );
}

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
