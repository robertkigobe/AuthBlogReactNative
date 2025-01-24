//**first chat window from gemini */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { auth, firestore } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, onSnapshot, query,  orderBy, where, getDocs, arrayContainsAny  } from 'firebase/firestore';


export default function ChatScreen({ route, navigation }) {
  const { userId, userName } = route.params;
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        navigation.replace('Login');
      }
    });

    return unsubscribeAuth;
  }, []);

  useEffect(() => {
    if (user && userId) {
      const chatQuery = query(
        collection(firestore, 'chats'),
        where('participants', 'array-contains', user.uid),
        where('participants', 'array-contains', userId), //recipient
        orderBy('timestamp', 'asc') // Order messages by timestamp
      );


      const unsubscribeChat = onSnapshot(chatQuery, (querySnapshot) => {
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          fetchedMessages.push(doc.data());
        });
        setMessages(fetchedMessages);

      });

      return () => unsubscribeChat();
    }
    
  }, [user, userId]);


  const sendMessage = async () => {
    if (message.trim() === '') return;

    try {
       const currentUser = auth.currentUser;
       let chatDocRef;
       // First check if a chat doc for these users exists
       const chatQuery = query(
        collection(firestore, 'chats'),
        where('participants', 'array-contains-any', [currentUser.uid, userId])
    );

       const chatSnapshot = await getDocs(chatQuery);



        if (chatSnapshot.empty) {
           chatDocRef = await addDoc(collection(firestore, 'chats'), {
               participants: [currentUser.uid, userId]
            });

        } else {

            chatDocRef = chatSnapshot.docs[0].ref; 
        }

        //add subcollection
        const messageRef = collection(chatDocRef, "messages");

        const messagePayload = {
            sender: currentUser.uid, //or user.uid, they should be the same
            receiver: userId,
            message: message.trim(),
            timestamp: new Date(),
            senderName: currentUser.displayName || currentUser.email, // fallback to email if displayName isn't available
        }


       await addDoc(messageRef, messagePayload)
        setMessage(''); // Clear the input field

    } catch (error) {
        console.error("Error sending message: ", error);
        Alert.alert('Error', 'Failed to send message: ' + error.message);
    }
};


  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === user.uid ? styles.sentMessage : styles.receivedMessage]}>

      <Text style={styles.messageText}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with {userName}</Text>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        inverted // most recent at bottom.
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          style={styles.input}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%', // Adjust to control message bubble width
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#90ee90', // Light green or similar color
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0ffff', // Light cyan or similar color
  },

  messageText:{
     fontSize: 16,
  }
});

