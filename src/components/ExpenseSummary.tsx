import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Expense {
  name: string;
  amount: number;
  date: Date;
}

interface ExpenseSummaryProps {
  expenses: Expense[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  // Function to calculate total amount for today's expenses
  const calculateTodayTotal = () => {
    const today = new Date();
    return expenses
      .filter(expense => {
        return (
          expense.date.getDate() === today.getDate() &&
          expense.date.getMonth() === today.getMonth() &&
          expense.date.getFullYear() === today.getFullYear()
        );
      })
      .reduce((total, expense) => total + expense.amount, 0);
  };

  // Function to calculate total amount for weekly expenses
  const calculateWeeklyTotal = () => {
    const startOfWeek = new Date();
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Start of current week (Sunday)

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // End of current week (Saturday)

    return expenses
      .filter(expense => expense.date >= startOfWeek && expense.date <= endOfWeek)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  // Function to calculate total amount for monthly expenses
  const calculateMonthlyTotal = () => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1); // Start of current month

    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0); // End of current month

    return expenses
      .filter(expense => expense.date >= startOfMonth && expense.date <= endOfMonth)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <View style={styles.list}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Today's Total: ${calculateTodayTotal().toFixed(2)}</Text>
        <Text style={styles.totalText}>Weekly Total: ${calculateWeeklyTotal().toFixed(2)}</Text>
        <Text style={styles.totalText}>Monthly Total: ${calculateMonthlyTotal().toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 20,
  },
  expenseItemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(58, 12, 163, 0.6)',
    borderRadius: 20,
  },
  expenseText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Lexend',
  },
  dateText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Lexend',
    marginTop: 5,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#ffffff'
  },
});

export default ExpenseSummary;
