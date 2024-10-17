import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/Placetovisit/t1.jpg'),
  require('../../assets/Placetovisit/t2.jpg'),
  require('../../assets/Placetovisit/t3.jpg'), // Replace with actual images
];

const trails = [
  {
    name: 'Lake Laurentian Conservation Area',
    description: 'The Lake Laurentian Conservation Area offers various trails for hiking, snowshoeing, and biking. It features scenic views of the lake and is popular for wildlife watching.',
    googleMapsLink: 'https://maps.app.goo.gl/wBs4YK39RUqAwqGn9' // Replace with actual link
  },
  {
    name: 'Bell Park Walkway',
    description: 'The Bell Park Walkway is a well-maintained path along Ramsey Lake. It is ideal for a leisurely stroll with stunning views of the water and surrounding parkland.',
    googleMapsLink: 'https://maps.app.goo.gl/LEgb7u6gVrfbC2sc7' // Replace with actual link
  },
  {
    name: 'Kivi Park',
    description: 'Kivi Park is a popular destination for outdoor enthusiasts. It offers a range of trails suitable for hiking, biking, skiing, and snowshoeing, along with beautiful vistas and lakes.',
    googleMapsLink: 'https://maps.app.goo.gl/hD1kquuVBSXUaBYy8' // Replace with actual link
  },
  {
    name: 'Moonlight Beach Trail',
    description: 'This trail connects to Moonlight Beach and is perfect for both beginner and seasoned hikers. It offers peaceful views of the lake and beach areas.',
    googleMapsLink: 'https://maps.app.goo.gl/3WE4wSJo1SbZQeG56' // Replace with actual link
  },
  {
    name: 'Fielding Memorial Park',
    description: 'Located in Lively, this park offers scenic trails perfect for walking, hiking, or just enjoying nature. The park includes picnic areas and a beautiful view of the river.',
    googleMapsLink: 'https://maps.app.goo.gl/yrKJqpmiRnccSCDTA' // Replace with actual link
  },
];

const TrailsNearSudbury = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Auto-switch images every 3 seconds
  useEffect(() => {
    const autoScroll = () => {
      if (!isManualScroll) {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    const interval = setInterval(autoScroll, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex, isManualScroll]);

  // Function to handle manual scroll start
  const handleScrollBeginDrag = () => {
    setIsManualScroll(true); // Stop auto-scrolling on manual drag
  };

  // Function to handle scroll end (manual or automatic)
  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
    setIsManualScroll(false); // Resume auto-scrolling after manual interaction
  };

  // Function to handle "Get Directions" button
  const handleGetDirections = (googleMapsLink) => {
    Linking.openURL(googleMapsLink);
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
          onScrollBeginDrag={handleScrollBeginDrag}
          onMomentumScrollEnd={handleMomentumScrollEnd}
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
          <Text style={styles.title}>Trails Near Sudbury</Text>

          {/* Location with map icon */}
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="#007AFF" style={styles.locationIcon} />
            <Text style={styles.subtitle}>Sudbury, Ontario</Text>
          </View>

          {/* Trail List */}
          {trails.map((trail, index) => (
            <View key={index} style={styles.trailContainer}>
              <Text style={styles.trailName}>{trail.name}</Text>
              <Text style={styles.trailDescription}>{trail.description}</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleGetDirections(trail.googleMapsLink)}>
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
    marginBottom: 30, // Add padding to prevent bottom navigation overlay
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
  trailContainer: {
    marginBottom: 20,
  },
  trailName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  trailDescription: {
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

export default TrailsNearSudbury;
