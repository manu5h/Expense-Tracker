import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Dashboard from './src/components/Dashboard';
import { RootStackParamList } from './src/components/types';
import { ExpenseProvider } from './src/components/ExpenseContext'

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
};

export default App;
