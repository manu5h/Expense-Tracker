import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Expense {
  name: string;
  amount: number;
  date: Date;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {


  return (
    <View style={styles.list}>
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItemContainer}>
            <Text style={styles.expenseText}>
              {item.name}: {item.amount.toFixed(0)} /=
            </Text>
            <Text style={styles.dateText}>Date: {item.date.toLocaleDateString()}</Text>
          </View>
        )}
      />
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

export default ExpenseList;
