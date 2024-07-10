// src/screens/Dashboard.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigationBar from './BottomNavigationBar';
import Header from './Header';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <BottomNavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;