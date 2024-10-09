import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/Accommodation/Entertainment-1.png"),
  require("../../assets/Accommodation/Entertainment-1.png"),
];

const EntertainmentScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Function to handle infinite scroll
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / (width * 0.7)); // Adjusted for visible images

    if (newIndex >= images.length) {
      setCurrentIndex(0); // Loop back to the first image
      flatListRef.current.scrollToIndex({ index: 0, animated: false });
    } else if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Manually adjust scroll position for infinite swipe
  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / (width * 0.7));

    if (newIndex === images.length) {
      flatListRef.current.scrollToIndex({ index: 0, animated: false });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#007AFF" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Entertainment Facility</Text>
      </View>

      {/* Swipeable Images */}
      <View style={styles.imageContainer}>
        <FlatList
          ref={flatListRef}
          data={images.concat([images[0]])} // Add the first image again for infinite scroll illusion
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={width * 0.7 + 20} // Control snapping effect with visible adjacent images
          contentContainerStyle={{
            paddingHorizontal: (width - width * 0.7) / 2,
          }} // Center the first image
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>

      {/* Description Section */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          In the accommodation section, we ensure your stay is not only
          comfortable but also filled with fun and relaxation. Our facilities
          include both indoor and outdoor games to suit all interests. Whether
          you're in the mood for a competitive indoor game of table tennis,
          chess, or carrom, or prefer outdoor activities like basketball,
          badminton, or volleyball, we've got you covered.
        </Text>

        {/* Go Home Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.goHomeButton}
        >
          <Text style={styles.goHomeText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    flex: 1, // Occupy space for alignment
  },
  title: {
    flex: 8, // Flex to fill remaining space
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    marginRight: 28, // This ensures the title aligns with the back arrow
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageWrapper: {
    width: width * 0.7, // Adjusted width to show next/previous images
    height: height * 0.3,
    marginHorizontal: 0,
    borderRadius: 15, // Rounded corners for images
    overflow: "hidden", // Ensure the border radius is applied to the image
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: "100%", // Full width of the wrapper
    height: "100%", // Full height of the wrapper
    borderRadius: 15, // Ensure the image has rounded corners
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  goHomeButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  goHomeText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default EntertainmentScreen;
