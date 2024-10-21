import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const StationaryDetail = () => {
  const navigation = useNavigation();

  const [stationaryItems, setStationaryItems] = useState([
    { id: 1, name: 'Notebook x 2', selected: false },
    { id: 2, name: 'A4 size plain white paper', selected: false },
    { id: 3, name: 'Basic stationary', selected: false },
    { id: 4, name: 'Calculator', selected: false },
    { id: 5, name: 'Backpack for college', selected: false },
  ]);

  useEffect(() => {
    const loadSelections = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('selectedStationaryItems');
        if (storedItems) {
          setStationaryItems(JSON.parse(storedItems));
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load saved data.');
      }
    };
    loadSelections();
  }, []);

  const toggleCheckbox = async (id) => {
    const updatedItems = stationaryItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setStationaryItems(updatedItems);

    try {
      await AsyncStorage.setItem('selectedStationaryItems', JSON.stringify(updatedItems));
    } catch (error) {
      Alert.alert('Error', 'Failed to save selection.');
    }
  };

  const renderItem = ({ item }) => {
    const iconSize = 28; 
    let iconName = 'ellipse-outline'; 
    let iconColor = '#ccc'; 
    let backgroundStyle = {}; 

    if (item.selected) {
      iconName = 'checkmark-circle';
      iconColor = '#4CAF50'; 
      backgroundStyle = styles.selectedCheckboxBackground;
    }

    return (
      <TouchableOpacity onPress={() => toggleCheckbox(item.id)} style={[styles.itemContainer, backgroundStyle]}>
        <View style={styles.checkboxContainer}>
          <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.checkboxIcon} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Stationary</Text>
        </View>
      </View>

      {/* FlatList with padding for bottom navigation */}
      <FlatList
        data={stationaryItems}
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
  headerContainer: {
    backgroundColor: '#5ca7d8',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 90, // Padding for bottom navigation
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10, 
    backgroundColor: '#f7f7f7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2, 
  },
  checkboxContainer: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 50,
    padding: 2,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedCheckboxBackground: {
    backgroundColor: '#e0f7f3',
  },
  checkboxIcon: {
    alignSelf: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default StationaryDetail;
