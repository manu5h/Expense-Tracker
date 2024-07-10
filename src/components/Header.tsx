import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types';

const Header = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.header}>
      <Image 
        source={require('../../assets/images/headerLogo.png')} 
        style={styles.logo} 
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#3A0CA3',
  },
  logo: {
    width: 200, 
    height: 50, 
    resizeMode: 'contain', 
  },
  logoutButton: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  logoutText: {
    color: '#ffffff',
    fontWeight: 'light',
  },
});

export default Header;
