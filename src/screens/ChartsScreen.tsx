// src/screens/ChartsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ChartsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Charts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChartsScreen;
