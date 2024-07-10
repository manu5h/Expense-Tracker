// src/screens/DashboardContent.tsx
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseSummary from '../components/ExpenseSummary';

const DashboardContent = () => {
  const [expenses, setExpenses] = useState([
    { name: 'Groceries', amount: 50.5, date: new Date() },
    { name: 'Transport', amount: 15.75, date: new Date() },
    { name: 'Utilities', amount: 100.0, date: new Date() },
    // Add more expenses as needed
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newExpenseName, setNewExpenseName] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [newExpenseDate, setNewExpenseDate] = useState(new Date());

  const addExpense = () => {
    if (newExpenseName && newExpenseAmount) {
      const newExpense = {
        name: newExpenseName,
        amount: parseFloat(newExpenseAmount),
        date: newExpenseDate,
      };
      setExpenses([...expenses, newExpense]);
      setNewExpenseName('');
      setNewExpenseAmount('');
      setNewExpenseDate(new Date());
      setShowForm(false); // Hide the form after adding the expense
    }
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/DashboardBackground.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Header />
        <ExpenseList expenses={expenses} />
        <ExpenseSummary expenses={expenses} />
        {showForm && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={showForm}
            onRequestClose={closeForm}>
            <View style={styles.overlay}>
              <View style={styles.modalContent}>
                <AddExpenseForm
                  newExpenseName={newExpenseName}
                  setNewExpenseName={setNewExpenseName}
                  newExpenseAmount={newExpenseAmount}
                  setNewExpenseAmount={setNewExpenseAmount}
                  newExpenseDate={newExpenseDate}
                  setNewExpenseDate={setNewExpenseDate}
                  addExpense={addExpense}
                  closeForm={closeForm}  // Pass the closeForm function
                />
              </View>
            </View>
          </Modal>
        )}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowForm(true)}>
          <Image
            source={require('../../assets/images/plusIcon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
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
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  icon: {
    width: 40,
    height: 38,
    resizeMode: 'contain',
  },
});

export default DashboardContent;
