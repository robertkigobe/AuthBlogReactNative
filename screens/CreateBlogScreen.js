
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth, firestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function CreateBlogScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateBlog = async () => {
    const currentUser = auth.currentUser; // Get the logged-in user

    if (!title || !content) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
     
      await addDoc(collection(firestore, 'blogs'), {
        title,
        content,
        author: currentUser?.displayName || currentUser?.email || 'Anonymous', // Use user's display name or email
        uid: currentUser?.uid, // User's unique ID
        createdAt: new Date(),
      });

      Alert.alert('Success', 'Blog created successfully!');
      navigation.goBack(); // Go back to the BlogsScreen
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Blog</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Blog Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Blog Content"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TouchableOpacity style={styles.createButton} onPress={handleCreateBlog}>
        <Text style={styles.createButtonText}>Submit Blog</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  createButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
