import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClothingDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Clothing</Text>
      <Text style={styles.description}>
        Make sure to bring enough clothing for various weather conditions, especially if you're staying for an extended period.
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

export default ClothingDetail;
