import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

  export default ProfileScreen;

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });