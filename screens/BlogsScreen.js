import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { firestore } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';


export default function BlogsScreen({ navigation }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'blogs'),
      (querySnapshot) => {
        const blogList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      },
      (error) => {
        console.error('Error fetching blogs: ', error);
      }
    );

    return () => unsubscribe();
  }, []);

  const renderBlogItem = ({ item }) => (
    <TouchableOpacity
      style={styles.blogItem}
      onPress={() => navigation.navigate('BlogDetail', { blog: item })}
    >
      <Text style={styles.blogTitle}>
        {item.title} <Text style={styles.blogAuthor}>- {item.author}</Text>
      </Text>
      <Text style={styles.blogDate}>
        Published on: {item.date ? new Date(item.date.toDate()).toLocaleDateString() : 'Unknown'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blogs</Text>
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
