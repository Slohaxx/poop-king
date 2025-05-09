import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LandingPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Poop King</Text>
      <Text style={styles.subtitle}>The ultimate app for managing your poop routine!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // You can add navigation or other logic here
          alert('Get Started pressed!');
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const App: React.FC = () => {
  return <LandingPage />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});