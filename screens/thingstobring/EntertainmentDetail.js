import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ionicons for icons
import AsyncStorage from '@react-native-async-storage/async-storage';

const EntertainmentDetail = () => {
  const navigation = useNavigation();

  // Initialize state with default values, unchecked items
  const [entertainmentItems, setEntertainmentItems] = useState([
    { id: 1, name: 'Books', selected: false },
    { id: 2, name: 'Board games', selected: false },
    { id: 3, name: 'Music player', selected: false },
    { id: 4, name: 'Headphones', selected: false },
    { id: 5, name: 'Streaming device', selected: false },
    { id: 6, name: 'Tablet for reading', selected: false },
    { id: 7, name: 'Gaming console', selected: false },
  ]);

  // Load the saved checkbox states from AsyncStorage when the component mounts
  useEffect(() => {
    const loadSelections = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('selectedEntertainmentItems');
        if (storedItems) {
          setEntertainmentItems(JSON.parse(storedItems));
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load saved data.');
      }
    };
    loadSelections();
  }, []);

  // Function to handle checkbox click (can select and deselect)
  const toggleCheckbox = async (id) => {
    const updatedItems = entertainmentItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item // Toggle selection state
    );
    setEntertainmentItems(updatedItems);

    // Save the updated state to AsyncStorage
    try {
      await AsyncStorage.setItem('selectedEntertainmentItems', JSON.stringify(updatedItems));
    } catch (error) {
      Alert.alert('Error', 'Failed to save selection.');
    }
  };

  const renderItem = ({ item }) => {
    const iconSize = 28; // Bigger icon size for premium look
    let iconName = 'ellipse-outline'; // Default icon for unselected
    let iconColor = '#ccc'; // Gray color for unselected
    let backgroundStyle = {}; // Default background for unselected

    if (item.selected) {
      iconName = 'checkmark-circle';
      iconColor = '#4CAF50'; // Green color for selected
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
          <Text style={styles.headerTitle}>Entertainment</Text>
        </View>
      </View>

      {/* Entertainment List */}
      <FlatList
        data={entertainmentItems}
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
    // Enhanced shadow for iOS and Android
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 }, // Increase offset for more depth
    shadowOpacity: 0.8, // Increase opacity for a darker shadow
    shadowRadius: 10, // Increase blur for a more pronounced shadow
    elevation: 20, // Increase elevation for a higher shadow effect
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    position: 'relative', // To position the back button absolutely
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 20, // Adjust if necessary based on your design
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
    borderRadius: 10, // Round corners for modern look
    backgroundColor: '#f7f7f7', // Light background for each item
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2, // Subtle shadow for item container
  },
  checkboxContainer: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 50, // Make it a circular checkbox
    padding: 2,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Subtle shadow on the checkbox itself
  },
  selectedCheckboxBackground: {
    backgroundColor: '#e0f7f3', // Add light background when selected
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

export default EntertainmentDetail;
