import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/Accommodation/e1.jpg"),
  require("../../assets/Accommodation/e2.jpg"),
  require("../../assets/Accommodation/e3.jpg"),
  require("../../assets/Accommodation/e4.jpg"),
];

const EntertainmentScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false); // For image zoom functionality
  const [selectedImage, setSelectedImage] = useState(null); // Track which image was clicked

  // Function to handle scrolling and set the current index
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  // Navigate to the next image
  const handleNextImage = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0; // Loop back to the first image
    }
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  // Auto-slide the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to handle image click to open it in full-screen modal
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <View style={styles.gradientBackground} />

      {/* Header with back button and title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Entertainment Facilities</Text>

        {/* This view will take up the space after the title to ensure proper centering */}
        <View style={{ width: 28 }} />
      </View>

      {/* Swipeable Images with touchable images */}
      <View style={styles.imageSliderContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
              <Image source={item} style={styles.image} />
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          style={{ flexGrow: 0 }} // Prevents FlatList from taking extra space
        />
        {/* Tap to Zoom note */}
        <Text style={styles.tapToZoomText}>Tap on the image to zoom</Text>
      </View>

      {/* Modal to display the zoomed image */}
      {selectedImage && (
        <Modal visible={isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            {/* Back button in zoomed image modal */}
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.modalBackButton}
            >
              <Ionicons name="arrow-back" size={30} color="#fff" />
            </TouchableOpacity>

            {/* Full-screen image */}
            <Image source={selectedImage} style={styles.fullScreenImage} />
          </View>
        </Modal>
      )}

      {/* Details Section with Points */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Facilities Available</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            - Access to on-campus fitness centres, sports facilities, and recreational activities, including gyms and sports fields.
          </Text>
          <Text style={styles.listItem}>
            - Designated social spaces within the residences.
          </Text>
          <Text style={styles.listItem}>
            - Various types of game equipment will be provided by the porter.
          </Text>
          <Text style={styles.listItem}>
            - Access to a theatre room, where you can entertain yourself on a large screen.
          </Text>
          <Text style={styles.listItem}>
            - Access to indoor games like pool and table tennis.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light neutral color for contrast
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "linear-gradient(45deg, #007AFF, #00CFFD, #D0F1FF)", // Add a gradient background for modern appeal
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#5ca7d8", // Updated the header color here
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    width: 28, // Match the width of the icon to ensure centering of the title
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // White text for contrast against the gradient
    textAlign: "center",
    flex: 1, // This will ensure the title is centered
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  imageSliderContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: width * 0.85, // Adjust width to fit one image at a time
    height: 260, // Adjust height to fit design
    borderRadius: 20, // Smooth, rounded corners
    resizeMode: "cover",
    marginHorizontal: (width * 0.15) / 2, // Ensure the images are centered and prevent left-shifting
    shadowColor: "#000", // Shadow for the image
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8, // Shadow for Android
  },
  tapToZoomText: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20, // Padding for the text content
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Slightly transparent background
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backdropFilter: "blur(10px)", // Glassmorphism effect
    elevation: 4, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6, // Shadow for iOS
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  listContainer: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "100%",
    height: "80%", // Fit the image to 80% of the screen height
    resizeMode: "contain", // Ensure the image fits within the screen
  },
  modalBackButton: {
    position: "absolute",
    top: 50, // Positioning the back button at the top
    left: 20,
    zIndex: 1, // Ensures it stays on top
  },
});

export default EntertainmentScreen
