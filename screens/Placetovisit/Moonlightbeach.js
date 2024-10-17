import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/Placetovisit/m1.jpg'),
  require('../../assets/Placetovisit/m2.jpg'),
];

const MoonlightBeach = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    const autoScroll = () => {
      if (!isManualScroll) {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    const timer = setTimeout(autoScroll, 3000); // 2 seconds interval for auto-scrolling

    return () => clearTimeout(timer); // Clear timeout on component unmount or state change
  }, [currentIndex, isManualScroll]);

  // Function to handle manual scroll start
  const handleScrollBegin = () => {
    setIsManualScroll(true);
  };

  // Function to handle scroll end (either manual or automatic)
  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
    setIsManualScroll(false); // Resumes automatic scrolling after user scrolls manually
  };

  // Function to handle "Get Directions" button
  const handleGetDirections = () => {
    Linking.openURL('https://maps.app.goo.gl/jk2NVztNRRje5S9h7'); // Replace with actual Google Maps link
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
          onScrollBeginDrag={handleScrollBegin}
          onMomentumScrollEnd={handleScrollEnd}
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
          <Text style={styles.title}>Moonlight Beach</Text>

          {/* Location with map icon */}
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="#007AFF" style={styles.locationIcon} />
            <Text style={styles.subtitle}>Sudbury, Ontario</Text>
          </View>

          {/* Get Direction Button */}
          <TouchableOpacity style={styles.button} onPress={handleGetDirections}>
            <Text style={styles.buttonText}>Get Direction</Text>
            <Ionicons name="arrow-forward-circle-outline" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Description Section */}
          <Text style={styles.description}>
            Moonlight Beach is one of Sudbury's most beautiful waterfront destinations. With its soft sands and scenic views, it’s the perfect place for a swim or a relaxing day by the lake.
          </Text>
          <Text style={styles.description}>
            Located just a short drive from Laurentian University, Moonlight Beach is popular among students and locals alike for picnics, sunbathing, and evening strolls.
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
    backgroundColor: '#007AFF',
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

export default MoonlightBeach;
