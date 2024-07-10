import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AddExpenseFormProps {
  newExpenseName: string;
  setNewExpenseName: (name: string) => void;
  newExpenseAmount: string;
  setNewExpenseAmount: (amount: string) => void;
  newExpenseDate: Date;
  setNewExpenseDate: (date: Date) => void;
  addExpense: () => void;
  closeForm: () => void;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({
  newExpenseName,
  setNewExpenseName,
  newExpenseAmount,
  setNewExpenseAmount,
  newExpenseDate,
  setNewExpenseDate,
  addExpense,
  closeForm,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const currentDate = new Date();
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || newExpenseDate;
    setShowDatePicker(Platform.OS === 'ios');
    setNewExpenseDate(currentDate);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        value={newExpenseName}
        onChangeText={setNewExpenseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        keyboardType="numeric"
        value={newExpenseAmount}
        onChangeText={setNewExpenseAmount}
      />
      <View>
        <Button onPress={() => setShowDatePicker(true)} title="Select Date" />
        {showDatePicker && (
          <DateTimePicker
            value={newExpenseDate}
            mode="date"
            display="default"
            onChange={onChange}
            minimumDate={startOfMonth}
            maximumDate={endOfMonth}
          />
        )}
        <Text style={styles.dateText}>
          Selected Date: {newExpenseDate.toLocaleDateString()}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={closeForm}>
        <Text style={styles.buttonText}>Discard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Make form background slightly transparent
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#3A0CA3',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
    color: '#3A0CA3',
  },
  button: {
    marginLeft: 50,
    height: 50,
    width: '70%',
    backgroundColor: '#3A0CA3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lexend',
  },
});

export default AddExpenseForm;
