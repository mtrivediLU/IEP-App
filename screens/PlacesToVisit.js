import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const placesData = [
  {
    id: '1',
    title: 'Bell Park',
    description: 'Sudbury, near science north',
    image: require('../assets/Placetovisit/b3.jpg'), // Replace with actual image path
  },
  {
    id: '2',
    title: 'Science North ',
    description: 'Niagara Falls',
    image: require('../assets/Accommodation/e1.jpg'), // Replace with actual image path
  },
  {
    id: '3',
    title: 'LU Private Beach',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '4',
    title: 'Moonlight Beach',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '5',
    title: 'New Sudbury Mall',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '6',
    title: 'Grocery Stores',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '7',
    title: 'Onaping Falls',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '8',
    title: 'Slivercity Theatre',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },{
    id: '9',
    title: 'Trails Near Sudbury',
    description: 'Niagara Falls',
    image: require('../assets/places.png'), // Replace with actual image path
  },
];

const PlacesToVisit = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Places to Visit</Text>
      </View>

      {/* FlatList with places to visit */}
      <FlatList
        data={placesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Light background color for a modern look
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  },
  backButton: {
    marginRight: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default PlacesToVisit;
