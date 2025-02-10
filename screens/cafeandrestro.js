import React, { useRef, useState, useEffect } from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ScrollView, Linking 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Sample images for dining services
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

  const restaurants = [
    { name: "Starbucks", address: "555 Barry Downe Rd, Greater Sudbury, ON P3A 0B2, Canada" },
    { name: "Taj Bistro", address: "151 Larch St, Greater Sudbury, ON P3E 1C3, Canada" },
    { name: "Beard's Coffee Bar And Bakery", address: "587 Kathleen St, Greater Sudbury, ON P3C 2N4, Canada" },
    { name: "Salute Coffee Company", address: "2195 Armstrong St, Greater Sudbury, ON P3E 4W2, Canada" },
    { name: "J&M Indian Cuisine", address: "2037 Long Lake Rd #3, Greater Sudbury, ON P3E 6J9, Canada" },
    { name: "Sukhdev Restaurant", address: "390 Elgin St, Greater Sudbury, ON P3E 3E5, Canada" },
    { name: "Restaurant Garuda", address: "1893 Lasalle Blvd, Greater Sudbury, ON P3A 2A3, Canada" },
  ];

  // Auto-scroll images every 2.5 seconds
  useEffect(() => {
    const autoScroll = () => {
      if (!isManualScroll) {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    const interval = setInterval(autoScroll, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, isManualScroll]);

  const handleScroll = () => setIsManualScroll(true);

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
              style={[styles.dot, { backgroundColor: currentIndex === index ? '#007AFF' : '#ddd' }]}
            />
          ))}
        </View>
      </View>

      {/* Dining Services Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Cafes & Restaurants Available in Sudbury</Text>

        {/* Dining Services List */}
        {restaurants.map((service, index) => (
          <View key={index} style={styles.storeContainer}>
            <Text style={styles.storeName}>{service.name}</Text>
            <Text style={styles.storeAddress}>{service.address}</Text>
            
            {/* Updated Button */}
            <TouchableOpacity style={styles.button} onPress={() => handleGetDirections(service)}>
              <Ionicons name="location-outline" size={22} color="#fff" style={styles.icon} />
              <Text style={styles.buttonText}>Get Directions</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Bottom Margin to prevent navigation overlap */}
      <View style={styles.bottomSpacing}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    marginBottom: 30,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: 350,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  storeContainer: {
    backgroundColor: '#f1f5f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
    borderRadius: 25,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomSpacing: {
    height: 50, // Extra margin at the bottom to prevent overlap
  },
});

export default DiningServices;
