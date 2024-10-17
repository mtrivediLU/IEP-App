import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/Placetovisit/s1.jpg'),
  require('../../assets/Placetovisit/s2.jpg'),
  require('../../assets/Placetovisit/s3.jpg'), // Replace with actual images
];

const groceryStores = [
  { name: 'Walmart', address: '2416 Long Lake Rd, Sudbury, ON' },
  { name: 'Costco', address: '1465 Kingsway Blvd, Sudbury, ON' },
  { name: 'Bombay Spices', address: '428 Westmount Ave UNIT 6 & 7, Greater Sudbury, ON P3A 5V8, Canada' },
  { name: 'Dollarama', address: 'New Sudbury Centre, 1349 Lasalle Blvd, Greater Sudbury, ON P3A 1Z2, Canada' },
  { name: 'Metro', address: '900 Lasalle Blvd, Sudbury, ON' },
  { name: 'Real Canadian Superstore', address: '1485 Lasalle Blvd, Sudbury, ON' },
  { name: 'Food Basics', address: '1875 Regent St, Sudbury, ON' },
  // Add more stores as needed
];

const GroceryStores = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Auto-switch images every 3 seconds
  useEffect(() => {
    const autoScroll = () => {
      if (!isManualScroll) {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    const interval = setInterval(autoScroll, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex, isManualScroll]);

  // Function to handle manual scroll start
  const handleScroll = () => {
    setIsManualScroll(true);
  };

  // Function to handle scroll end (either manual or automatic)
  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
    setIsManualScroll(false); // Resumes automatic scrolling after user scrolls manually
  };

  // Function to handle "Get Directions" button
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
          onScrollBeginDrag={handleScroll} // Triggers on manual drag
          scrollEventThrottle={16}
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
              style={[
                styles.dot,
                { backgroundColor: currentIndex === index ? '#555' : '#ddd' }, // Active dot is darker
              ]}
            />
          ))}
        </View>
      </View>

      {/* Card section with details */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Grocery Stores in Sudbury</Text>

          {/* Grocery Stores List */}
          {groceryStores.map((store, index) => (
            <View key={index} style={styles.storeContainer}>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={styles.storeAddress}>{store.address}</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleGetDirections(store)}>
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
    marginBottom: 30, // Add padding to prevent bottom navigation overlap
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background to enhance visibility
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

export default GroceryStores;
