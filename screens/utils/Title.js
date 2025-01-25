import React, { useEffect } from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import Colors from './Colors';

function Title({ children }) {
  const slideAnim = new Animated.Value(-50);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.Text 
      style={[
        styles.title,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {children}
    </Animated.Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif-medium',
    }),
    fontSize: 24,
    fontWeight: '700',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: Colors.primary700,
    padding: 12,
    marginVertical: 16,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
});