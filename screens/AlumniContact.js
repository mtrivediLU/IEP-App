import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const alumniData = [
  {
    id: '1',
    name: 'Alumni 1',
    role: 'Student (IT)',
    details: 'IEP 2024 Ahmedabad',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  {
    id: '2',
    name: 'Alumni 2',
    role: 'Student (CSE)',
    details: 'IEP 2024 Ahmd',
    image: require('../assets/places.png'), // Replace with actual image path
  },
  // Add more alumni data here
];

const AlumniContacts = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Alumni Contacts</Text>
      <FlatList
        data={alumniData}
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
  },
  card: {
    backgroundColor: '#4DA4E0',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#fff',
  },
  details: {
    fontSize: 12,
    color: '#d3e8ff',
  },
});

export default AlumniContacts;
