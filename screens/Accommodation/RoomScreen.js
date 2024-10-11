import React, { useRef, useState } from "react";
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

const { width } = Dimensions.get("window");

const images = [
  require("../../assets/Accommodation/e1.jpg"),
  require("../../assets/Accommodation/e1.jpg"),
  require("../../assets/Accommodation/e1.jpg"), // Add your images here
];

const EntertainmentScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle scrolling and set the current index
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  // Function to handle when the user finishes swiping
  const handleMomentumScrollEnd = () => {
    if (currentIndex === images.length - 1) {
      // If last image, scroll back to the first image
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
      setCurrentIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#007AFF" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Rooms </Text>

        {/* This view will take up the space after the title to ensure proper centering */}
        <View style={{ width: 28 }} />
      </View>

      {/* Swipeable Images */}
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={handleScroll}
        renderItem={({ item }) => <Image source={item} style={styles.image} />}
        keyExtractor={(_, index) => index.toString()}
        style={{ flexGrow: 0 }} // Prevents FlatList from taking extra space
      />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Rooms Facility</Text>

        <Text style={styles.description}>
          Our Entertainment Facility offers both indoor and outdoor games for
          all interests. Enjoy a competitive game of table tennis, chess, or
          carrom, or explore outdoor activities like basketball, badminton, or
          volleyball. Fun and relaxation await!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    width: 28, // Match the width of the icon to ensure centering of the title
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    flex: 1, // This will ensure the title is centered
  },
  image: {
    width: 450,
    height: 350, // Height of the image
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16, // Padding for the text content
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // Shadow for iOS
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 19,
    color: "#333",
    marginTop: 8, // Reduced the margin to keep the description closer to the title
    lineHeight: 24,
  },
});

export default EntertainmentScreen;
