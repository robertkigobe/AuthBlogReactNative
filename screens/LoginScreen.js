// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  // Ensure this path is correct

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);  // Sign-in with Firebase Auth
      navigation.navigate('Main'); // Navigate to the UsersListScreen after successful login
    } catch (error) {
      Alert.alert('Error', error.message);  // Show error message if login fails
    }
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupText: {
    color: '#4a90e2',
    marginTop: 15,
  },
});
