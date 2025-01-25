import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ContactUsScreen() {
  const openEmail = () => {
    Linking.openURL('mailto:raricanow@gmail.com')
  }

  const openPhone = () => {
    Linking.openURL('tel:17809666178')
  }

  const openMaps = () => {
    Linking.openURL('https://maps.google.com/?q=15610 93A Avenue NW Edmonton, AB T5R 5J3')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        
        <TouchableOpacity style={styles.card} onPress={openMaps}>
          <Icon name="location" size={24} color="#4a90e2" />
          <Text style={styles.label}>Address</Text>
          <Text style={styles.info}>15610 93A Avenue NW</Text>
          <Text style={styles.info}>Edmonton, AB T5R 5J3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={openEmail}>
          <Icon name="mail" size={24} color="#4a90e2" />
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>raricanow@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={openPhone}>
          <Icon name="call" size={24} color="#4a90e2" />
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.info}>1(780)966-6178</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a90e2',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a5568',
    marginTop: 8,
    marginBottom: 4,
  },
  info: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    lineHeight: 24,
  },
})