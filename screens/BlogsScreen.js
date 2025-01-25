import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { firestore } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function BlogsScreen({ navigation }) {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update the user state with the current user
      if (!currentUser) {
        navigation.replace('Login'); // Navigate to Login if no user is logged in
      }
    });

    const unsubscribeFirestore = onSnapshot(
      collection(firestore, 'blogs'),
      (querySnapshot) => {
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Sort blogs by date in descending order with null check
        const sortedBlogs = blogList.sort((a, b) => {
          if (!a.date) return 1;  // Push items without dates to the end
          if (!b.date) return -1;
          return b.date.toDate() - a.date.toDate();
        });
        setBlogs(sortedBlogs);
      },
      (error) => {
        console.error('Error fetching blogs: ', error);
      }
    );

    return () => {
      unsubscribeAuth();
      unsubscribeFirestore();
    };
  }, [navigation]);

  const renderBlogItem = ({ item }) => (
    <TouchableOpacity
      style={styles.blogItem}
      onPress={() => navigation.navigate('BlogDetail', { blog: item })}
    >
      <Text style={styles.blogTitle}>
        {item.title} <Text style={styles.blogAuthor}>- {item.authorName || 'Anonymous'}</Text>
      </Text>
      <Text style={styles.blogDate}>
        Published on: {item.date ? new Date(item.date.toDate()).toLocaleDateString() : 'Unknown'}
      </Text>
    </TouchableOpacity>
  );

  const handleCreateBlog = () => {
    if (!user) {
      Alert.alert('Error', 'You must be logged in to create a blog.');
      navigation.replace('Login');
    } else {
      navigation.navigate('CreateBlog');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blogs</Text>
      {/* Conditionally render the "Create Blog" button */}
      {user && (
        <Button title="Create Blog" onPress={handleCreateBlog} color="#4a90e2" />
      )}
      <FlatList
        data={blogs}
        renderItem={renderBlogItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.blogList}
      />
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
    textAlign: 'center',
  },
  blogList: {
    paddingBottom: 20,
  },
  blogItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  blogAuthor: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
  },
  blogDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
});
