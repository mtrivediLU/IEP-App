import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinancialDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Financial Items</Text>
      <Text style={styles.description}>
        Don’t forget your essential financial items, such as credit/debit cards, some cash, and any travel insurance documents.
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

export default FinancialDetail;
