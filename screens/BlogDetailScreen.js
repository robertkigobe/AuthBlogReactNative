import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import Title from './utils/Title';
import Webtext from './utils/Webtext';

export default function BlogDetailScreen({ route }) {
  const navigation = useNavigation(); // To handle navigation
  const { blog } = route.params; // Get the blog passed via navigation
  const [reply, setReply] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleReplySubmit = async () => {
    if (!reply.trim()) return;

    try {
      const blogRef = doc(firestore, 'blogs', blog.id);
      await updateDoc(blogRef, {
        replies: arrayUnion({
          reply,
          author: 'Current User', // Replace with logged-in user's name
          date: new Date().toISOString(),
        }),
      });

      setReply('');
      setModalVisible(false);
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  const renderReplyItem = ({ item }) => (
    <View style={styles.replyItem}>
      <Text style={styles.replyAuthor}>{item.author}:</Text>
      <Text style={styles.replyText}>{item.reply}</Text>
      <Text style={styles.replyDate}>
        {new Date(item.date).toLocaleDateString()}
      </Text>
    </View>
  );

  const handleLogout = () => {
    // Logic for logging out (e.g., Firebase auth sign-out)
    console.log('User logged out');
    navigation.navigate('Login'); // Redirect to the Login screen
  };

  return (
    <View style={styles.container}>
    

      <Title>{blog.title}</Title>
      <Webtext>Author: {blog.author}</Webtext>
      <Text style={styles.date}>
        Published on: {blog.date ? new Date(blog.date.toDate()).toLocaleDateString() : 'Unknown'}
        </Text>
        <Webtext>{blog.content}</Webtext>

      {/* Replies Section */}
      {blog.replies && blog.replies.length > 0 && (
        <View style={styles.repliesContainer}>
          <Text style={styles.repliesTitle}>Replies:</Text>
          <FlatList
            data={blog.replies}
            renderItem={renderReplyItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}

      {/* Reply Button */}
      <TouchableOpacity
        style={styles.replyButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.replyButtonText}>Reply</Text>
      </TouchableOpacity>

      {/* Reply Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reply to {blog.title}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Write your reply..."
              value={reply}
              onChangeText={setReply}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Submit" onPress={handleReplySubmit} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4a90e2',
    padding: 10,
  },
  statusBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  repliesContainer: {
    marginTop: 20,
  },
  repliesTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4a90e2',
  },
  replyItem: {
    marginBottom: 10,
  },
  replyAuthor: {
    fontWeight: 'bold',
    color: '#555',
  },
  replyText: {
    color: '#333',
  },
  replyDate: {
    fontSize: 12,
    color: '#aaa',
  },
  replyButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4a90e2',
    borderRadius: 5,
  },
  replyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
