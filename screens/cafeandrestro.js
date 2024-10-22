import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Replace with actual images for dining services
const images = [
  require('../assets/cr-1.jpg'),
  require('../assets/cr-2.jpg'),
  require('../assets/cr-3.jpg'), 
  require('../assets/cr-4.jpg'),
];

const DiningServices = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Initialize restaurants list inside the component
  const [restaurants, setRestaurants] = useState([
    { name: "Starbucks", address: "555 Barry Downe Rd, Greater Sudbury, ON P3A 0B2, Canada" },
    { name: "Taj Bistro", address: "151 Larch St, Greater Sudbury, ON P3E 1C3, Canada" },
    { name: "Beard's Coffee Bar And Bakery", address: "587 Kathleen St, Greater Sudbury, ON P3C 2N4, Canada" },
    { name: "Salute Coffee Company", address: "C2V7+GV Sudbury, Greater Sudbury, ON, Canada" },
    { name: "J&M Indian Cuisine", address: "2037 Long Lake Rd #3, Greater Sudbury, ON P3E 6J9, Canada" },
    { name: "SUKHDEV RESTAURANT", address: "F2P6+MH Sudbury, Greater Sudbury, ON, Canada" },
    { name: "Restaurant Garuda", address: "1893 Lasalle Blvd, Greater Sudbury, ON P3A 2A3, Canada" },
  ]);

  // Auto-switch images every 2 seconds
  useEffect(() => {
    const autoScroll = () => {
      if (!isManualScroll) {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    const interval = setInterval(autoScroll, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, isManualScroll]);

  const handleScroll = () => {
    setIsManualScroll(true);
  };

  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
    setIsManualScroll(false);
  };

  const handleGetDirections = (store) => {
    Linking.openURL(`https://maps.google.com/?q=${store.name}, ${store.address}`);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      {/* Image Slider */}
      <View style={styles.imageContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScrollBeginDrag={handleScroll}
          renderItem={({ item }) => <Image source={item} style={styles.image} />}
          keyExtractor={(_, index) => index.toString()}
        />

        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Dot Indicators */}
        <View style={styles.dotContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, { backgroundColor: currentIndex === index ? '#555' : '#ddd' }]}
            />
          ))}
        </View>
      </View>

      {/* Card Section with Details */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Cafes & Restaurants Available in Sudbury</Text>

          {/* Dining Services List */}
          {restaurants.map((service, index) => (
            <View key={index} style={styles.storeContainer}>
              <Text style={styles.storeName}>{service.name}</Text>
              <Text style={styles.storeAddress}>{service.address}</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleGetDirections(service)}>
                <Text style={styles.buttonText}>Get Directions</Text>
                <Ionicons name="arrow-forward-circle-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    marginBottom: 30, // Padding to prevent bottom navigation overlap
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: 350,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  dotContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  storeContainer: {
    marginBottom: 20,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  storeAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default DiningServices;
