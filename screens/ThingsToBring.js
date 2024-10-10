import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back icon

const thingsToBringData = [
  {
    id: '1',
    title: 'Documents',
    image: require('../assets/Thingstobring/Document.png'),
    backgroundColor: '#FFCDD2',
    screen: 'DocumentsDetail',
  },
  {
    id: '2',
    title: 'Stationary',
    image: require('../assets/Thingstobring/Stationery.png'),
    backgroundColor: '#F8BBD0',
    screen: 'StationaryDetail',
  },
  {
    id: '3',
    title: 'Electronics',
    image: require('../assets/Thingstobring/Electronics.png'),
    backgroundColor: '#BBDEFB',
    screen: 'ElectronicsDetail',
  },
  {
    id: '4',
    title: 'Entertainment',
    image: require('../assets/Thingstobring/Entertainment.png'),
    backgroundColor: '#C8E6C9',
    screen: 'EntertainmentDetail',
  },
  {
    id: '5',
    title: 'Miscellaneous',
    image: require('../assets/Thingstobring/Miscellaneous.png'),
    backgroundColor: '#FFE082',
    screen: 'MiscellaneousDetail',
  },
  {
    id: '6',
    title: 'Personal Care',
    image: require('../assets/Thingstobring/personal_care.png'),
    backgroundColor: '#FFCCBC',
    screen: 'PersonalCareDetail',
  },
  {
    id: '7',
    title: 'Clothing',
    image: require('../assets/Thingstobring/Clothing.png'),
    backgroundColor: '#D1C4E9',
    screen: 'ClothingDetail',
  },
  {
    id: '8',
    title: 'Snacks',
    image: require('../assets/Thingstobring/Snacks.png'),
    backgroundColor: '#FFF9C4',
    screen: 'SnacksDetail',
  },
  {
    id: '9',
    title: 'Financial Items',
    image: require('../assets/Thingstobring/Financial_items.png'), // Corrected path
    backgroundColor: '#C5E1A5',
    screen: 'FinancialDetail',
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
      <View style={styles.headerContainer}>
        {/* Back button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.header}>Things to bring</Text>
      </View>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    flex: 1, // Ensures the header is centered
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
    backgroundColor: '#ffffff',
    borderRadius: 50,
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
