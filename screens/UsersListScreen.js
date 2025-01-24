import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'; // Firestore helpers

export default function UsersListScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Get all users from Firestore
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'users'));
      const userList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);


  const handleUserClick = (userId, userName) => {
    navigation.navigate('Chat', { userId, userName });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.userItem} 
      onPress={() => handleUserClick(item.id, item.name)}
    >
      <Text style={styles.userText}>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Use Firestore document ID
      />
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
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userText: {
    fontSize: 18,
    color: '#333',
  },
});
