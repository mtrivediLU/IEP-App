import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // You can use other icons based on your setup

const ElectronicsDetail = () => {
  const navigation = useNavigation();

  const electronicsItems = [
    { id: 1, name: 'Laptop and charger', selected: true },
    { id: 2, name: 'Mobile phone charger', selected: true },
    { id: 3, name: 'Watch charger', selected: false },
    { id: 4, name: 'Earphones', selected: true },
    { id: 5, name: 'Power bank', selected: true },
    { id: 6, name: 'Travel adapter', selected: false },
    { id: 7, name: 'USB drives', selected: true },
    { id: 8, name: 'Headphones', selected: false },
    { id: 9, name: 'Any necessary cables', selected: false },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Ionicons
        name={item.selected ? 'checkbox' : 'square-outline'}
        size={24}
        color={item.selected ? '#007AFF' : '#ccc'}
        style={styles.checkbox}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Electronics</Text>
      </View>

      {/* Electronics List */}
      <FlatList
        data={electronicsItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
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
    width: '100%',
    backgroundColor: '#007AFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ElectronicsDetail;
