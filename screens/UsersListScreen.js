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
    // navigation.navigate('Chat', { userId, userName });
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
    backgroundColor: '#f7f9fc', // Subtle background color
    paddingTop: 40, // Add padding at the top
    paddingHorizontal: 20, // Horizontal padding for consistent spacing
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50', // Slightly muted blue-gray
    textAlign: 'center',
    marginBottom: 20,
  },
  userItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10, // Rounded corners
    marginBottom: 15, // Add spacing between items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  userText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#34495e',
  },
});
