import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { firestore } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function CreateBlogScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const auth = getAuth();

  const handleCreateBlog = async () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Required', 'Please fill in all fields');
      return;
    }

    try {
      const blogRef = collection(firestore, 'blogs');
      await addDoc(blogRef, {
        title: title.trim(),
        content: content.trim(),
        author: auth.currentUser.email,
        authorName: auth.currentUser.displayName || auth.currentUser.email.split('@')[0],
        date: serverTimestamp(),
      });
      
      Alert.alert('Success', 'Blog post created successfully!');
      navigation.goBack();
    } catch (error) {
      console.error('Error creating blog:', error);
      Alert.alert('Error', 'Failed to create blog post');
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
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleCreateBlog}
        activeOpacity={0.7}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});