import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native'; // Import Text from 'react-native'
import ExpenseContext from '../components/ExpenseContext';
import ExpenseSummary from '../components/ExpenseSummary';
import Header from '../components/Header';

const RecentScreen: React.FC = () => {
  const { expenses } = useContext(ExpenseContext)!;

  return (
    <ImageBackground
      source={require('../../assets/images/DashboardBackground.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Summary</Text>
        <ExpenseSummary expenses={expenses} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
  }
});

export default RecentScreen;
