import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const placesData = [
  {
    id: '1',
    title: 'Bell Park',
    description: 'Sudbury, near science north',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '2',
    title: 'Clifton Hill',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '3',
    title: 'Canada\'s Wonderland',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '4',
    title: 'Niagara River',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  // Add more places as needed
];

const PlacesToVisit = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
      <Ionicons name="arrow-forward-circle-outline" size={30} color="#007AFF" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Places to Visit</Text>
      <FlatList
        data={placesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default PlacesToVisit;
