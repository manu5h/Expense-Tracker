import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Expense {
  name: string;
  amount: number;
  date: Date;
}

interface ExpenseSummaryProps {
  expenses: Expense[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({expenses}) => {
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

  const calculateWeeklyTotal = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    return expenses
      .filter(
        expense => expense.date >= startOfWeek && expense.date <= endOfWeek,
      )
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateMonthlyTotal = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    return expenses
      .filter(
        expense => expense.date >= startOfMonth && expense.date <= endOfMonth,
      )
      .reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <View style={styles.list}>
      <View style={styles.totalContainer}>
        <Text style={styles.textHeader}>Today</Text>
        <Text style={styles.totalText}>
          {calculateTodayTotal().toFixed(2)} /=
        </Text>
        <Text style={styles.textHeader}>This week</Text>
        <Text style={styles.totalText}>
          {calculateWeeklyTotal().toFixed(2)} /=
        </Text>
        <Text style={styles.textHeader}>This month</Text>
        <Text style={styles.totalText}>
          {calculateMonthlyTotal().toFixed(2)} /=
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 20,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
    paddingTop: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#ffffff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 10,
    color: '#ffffff',
    marginBottom: 20,
  },
});

export default ExpenseSummary;
