import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const thingsToBringData = [
  {
    id: '1',
    title: 'Documents',
    image: require('../assets/places.png'), // Replace with your actual image path
  },
  {
    id: '2',
    title: 'Stationary',
    image: require('../assets/places.png'), // Replace with your actual image path
  },
  {
    id: '3',
    title: 'Electronics',
    image: require('../assets/places.png'), // Replace with your actual image path
  },
  {
    id: '4',
    title: 'Entertainment',
    image: require('../assets/places.png'), // Replace with your actual image path
  },
  {
    id: '5',
    title: 'Miscellaneous',
    image: require('../assets/places.png'), // Replace with your actual image path
  },
  {
    id: '6',
    title: 'Personal Care',
    image: require('../assets/places.png'), // Replace with your actual image path
  },
  // Add more categories if needed
];

const ThingsToBring = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Things to bring</Text>
      <FlatList
        data={thingsToBringData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
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
  list: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 20,
    width: '48%', // Ensures two cards fit in each row
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default ThingsToBring;
