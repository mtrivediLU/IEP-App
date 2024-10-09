import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const thingsToBringData = [
  {
    id: '1',
    title: 'Documents',
    image: require('../assets/places.png'), // Replace with your actual image path
    backgroundColor: '#FFCDD2', // Light red
    screen: 'DocumentsDetail', // Add screen name for navigation
  },
  {
    id: '2',
    title: 'Stationary',
    image: require('../assets/places.png'), // Replace with your actual image path
    backgroundColor: '#F8BBD0', // Light pink
    screen: 'StationaryDetail', // Add screen name for navigation
  },
  {
    id: '3',
    title: 'Electronics',
    image: require('../assets/places.png'), // Replace with your actual image path
    backgroundColor: '#BBDEFB', // Light blue
    screen: 'ElectronicsDetail', // Add screen name for navigation
  },
  {
    id: '4',
    title: 'Entertainment',
    image: require('../assets/places.png'), // Replace with your actual image path
    backgroundColor: '#C8E6C9', // Light green
    screen: 'EntertainmentDetail', // Add screen name for navigation
  },
  {
    id: '5',
    title: 'Miscellaneous',
    image: require('../assets/places.png'), // Replace with your actual image path
    backgroundColor: '#FFE082', // Light yellow
    screen: 'MiscellaneousDetail', // Add screen name for navigation
  },
  {
    id: '6',
    title: 'Personal Care',
    image: require('../assets/places.png'), // Replace with your actual image path
    backgroundColor: '#FFCCBC', // Light orange
    screen: 'PersonalCareDetail', // Add screen name for navigation
  },
];

const ThingsToBring = () => {
  const navigation = useNavigation(); // Use navigation hook for navigating between screens

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.backgroundColor }]}
      onPress={() => navigation.navigate(item.screen)} // Navigate to respective detail screen
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.cardImage} />
      </View>
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
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 20,
    width: '45%', // Adjust width to ensure better fitting
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: '#ffffff', // White background for image container
    borderRadius: 50, // To match the circular image background
    padding: 10,
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ThingsToBring;
