import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import CustomAlert from './src/CustomAlert';

function App(): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setAlertMessage('Enter User Name and Password !');
      setAlertVisible(true);
    } else if (username === 'user1' && password === 'Password123') {
      setAlertMessage('Login Successful. Welcome!');
      setAlertVisible(true);
    } else {
      setAlertMessage('Login Failed. Invalid User Name or Password.');
      setAlertVisible(true);
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <ImageBackground
      source={require('./assets/images/backgroundImage.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={closeAlert}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    height: 60,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 5,
    marginBottom: 16,
    marginTop: 20,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    fontFamily: 'Lexend',
    fontSize: 15,
    fontWeight: 'bold',
    paddingStart: 20,
    color: '#3A0CA3',
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#3A0CA3',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lexend',
  },
});

export default App;
