import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Accommodation = () => {
  const data = [
    { id: '1', title: 'Entertainment', description: 'Fun room with games and a big screen.', imageUrl: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Entertainment', description: 'Fun room with games and a big screen.', imageUrl: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Entertainment', description: 'Fun room with games and a big screen.', imageUrl: 'https://via.placeholder.com/100' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="arrow-forward-circle-outline" size={30} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Accommodation</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Accommodation;
