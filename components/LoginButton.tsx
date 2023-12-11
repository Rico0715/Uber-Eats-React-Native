import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const LoginButton = () => {
    const navigation = useNavigation();
  
    const handleLoginPress = () => {
      navigation.navigate('LoginScreen');
    };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={handleLoginPress}
    >
      <Text style={{ color: 'black', fontSize: 15, fontWeight: '900' }}>
        Connexion
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
