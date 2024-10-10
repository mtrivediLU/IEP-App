import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SnacksDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Snacks</Text>
      <Text style={styles.description}>
        Bring some non-perishable snacks to keep you energized during your trip. Examples include granola bars, chips, and trail mix.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default SnacksDetail;
