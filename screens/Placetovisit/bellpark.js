import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/Placetovisit/b3.jpg'),
  require('../../assets/Placetovisit/b2.jpg'),
  require('../../assets/Placetovisit/b1.jpg'),
];

const BellPark = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);  // Flag to track automatic/manual scroll

  // Handle automatic image scrolling
  useEffect(() => {
    const autoScroll = () => {
      if (isAutoScroll) {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    const interval = setInterval(autoScroll, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex, isAutoScroll]);

  // Handle manual scrolling start
  const handleScrollBegin = () => {
    setIsAutoScroll(false); // Stop auto-scrolling during manual scroll
  };

  // Handle manual scroll end
  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
    setIsAutoScroll(true); // Resume auto-scrolling after manual scroll
  };

  // Handle "Get Directions" button press
  const handleGetDirections = () => {
    Linking.openURL('https://maps.app.goo.gl/P7mPq4rA9yVFm4KY9');
  };

  return (
    <View style={styles.mainContainer}>
      {/* Image Slider */}
      <View style={styles.imageContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={handleScrollBegin} // Detect manual scroll start
          onMomentumScrollEnd={handleMomentumScrollEnd} // Detect scroll end and update index
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

      {/* Card Section with Details */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>BELL PARK</Text>

          {/* Location with map icon */}
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="#007AFF" style={styles.locationIcon} />
            <Text style={styles.subtitle}>Sudbury, near science north</Text>
          </View>

          {/* Get Direction Button */}
          <TouchableOpacity style={styles.button} onPress={handleGetDirections}>
            <Text style={styles.buttonText}>Get Direction</Text>
            <Ionicons name="arrow-forward-circle-outline" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Description Section */}
          <Text style={styles.description}>
            Laurentian Beach is the perfect getaway for relaxation and natural beauty. Located within
            the stunning surroundings of Laurentian University.
          </Text>
          <Text style={styles.description}>
            This serene beach offers a peaceful retreat where you can enjoy the fresh air, take a refreshing
            dip in the lake, or simply lounge by the water.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  imageContainer: {
    position: 'relative', // Allows the back button to overlay the image
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
    borderColor: 'rgba(255, 255, 255, 0.8)', // Border to make the button stand out more
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
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
    marginTop: -20, // Removed gap between image and card
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
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  locationIcon: {
    marginRight: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#268acb',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginBottom: 15,
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
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
});

export default BellPark;
