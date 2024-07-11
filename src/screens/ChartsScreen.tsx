import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header';
import ExpenseContext from '../components/ExpenseContext';
import { PieChart } from 'react-native-chart-kit';

const ChartsScreen = () => {
  const { expenses } = useContext(ExpenseContext)!;

  // Calculate total amount of all expenses
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Calculate percentage for each expense
  const chartData = expenses.map(expense => ({
    name: expense.name,
    amount: expense.amount,
    percentage: ((expense.amount / totalAmount) * 100).toFixed(2), // Calculate percentage
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/DashboardBackground.png')}
        style={styles.background}
      >
        <Header />
        <Text style={styles.chartTitle}>Expenses pie chart</Text>
        <PieChart
          data={chartData}
          width={350}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="20"
          hasLegend={false}
          absolute
        />
        
        <Text style={styles.text}>Total Amount: {totalAmount.toFixed(2)} /=</Text>

        <View style={styles.legendContainer}>
          {chartData.map((data, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: data.color }]} />
              <Text style={styles.legendText}>{data.name}: {data.amount.toFixed(2)} ( {data.percentage}% )</Text>
            </View>
          ))}
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  chartTitle: {
    color: '#ffffff',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
  },
  legendContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  legendText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ChartsScreen;
