import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut()
      .then(() => {
        console.log('User logged out');
        navigation.navigate('Login'); // Redirect to Login screen
      })
      .catch((error) => console.error('Error during logout:', error));
  };

  return (
    <View style={styles.header}>
      
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Icon name="logout" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4a90e2',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 5,
  },
});
