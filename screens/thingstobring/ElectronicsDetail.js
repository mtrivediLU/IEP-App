import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ElectronicsDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/places.png')} style={styles.image} />
      <Text style={styles.title}>Electronics</Text>
      <Text style={styles.details}>Laptops, chargers, and other electronic gadgets.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default ElectronicsDetail;
