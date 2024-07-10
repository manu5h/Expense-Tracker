import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';

const RecentScreen = () => {
  // Example expenses data
  const [expenses, setExpenses] = useState([
    { name: 'Groceries', amount: 50, date: new Date('2024-07-10') },
    { name: 'Utilities', amount: 100, date: new Date('2024-07-09') },
    // Add more expenses as needed
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecentScreen;
