import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SilverCity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to sudburymall</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SilverCity;
