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
  const modalFlatListRef = useRef(null); // For modal FlatList
  const [currentIndex, setCurrentIndex] = useState(0); // Index for main slider
  const [isModalVisible, setIsModalVisible] = useState(false); // For image zoom functionality
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Index for modal slider

  // Function to handle scrolling and set the current index on main screen
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / (width * 0.85));
    setCurrentIndex(newIndex);
  };

  // Navigate to the next image on main screen
  const handleNextImage = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0; // Loop back to the first image
    }
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  // Auto-slide the images every 3 seconds on main screen
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to handle image click to open it in full-screen modal
  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Function to handle scrolling in modal
  const handleModalScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setSelectedImageIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Entertainment Facilities</Text>

        {/* Placeholder for alignment */}
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
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleImagePress(index)}>
              <Image source={item} style={styles.image} />
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ alignItems: "center" }}
        />
        {/* Image Count on Main Screen */}
        <Text style={styles.imageCountText}>
          {currentIndex + 1} / {images.length}
        </Text>
        {/* Tap to Zoom note */}
        <Text style={styles.tapToZoomText}>Tap on the image to zoom</Text>
      </View>

      {/* Modal to display the zoomed images with slider */}
      {isModalVisible && (
        <Modal visible={isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            {/* Back button in zoomed image modal */}
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.modalBackButton}
            >
              <Ionicons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            {/* Full-screen images with slider */}
            <FlatList
              ref={modalFlatListRef}
              data={images}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleModalScroll}
              renderItem={({ item }) => (
                <Image source={item} style={styles.fullScreenImage} />
              )}
              keyExtractor={(_, index) => index.toString()}
              initialScrollIndex={selectedImageIndex}
              getItemLayout={(data, index) => ({
                length: width,
                offset: width * index,
                index,
              })}
            />

            {/* Image count displayed below the image */}
            <Text style={styles.modalImageCountText}>
              {selectedImageIndex + 1} / {images.length}
            </Text>
          </View>
        </Modal>
      )}

      {/* Details Section with Points */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Facilities Available</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            - Access to on-campus fitness centres, sports facilities, and
            recreational activities, including gyms and sports fields.
          </Text>
          <Text style={styles.listItem}>
            - Designated social spaces within the residences.
          </Text>
          <Text style={styles.listItem}>
            - Various types of game equipment will be provided by the porter.
          </Text>
          <Text style={styles.listItem}>
            - Access to a theatre room, where you can entertain yourself on a
            large screen.
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
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    width: 28,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
  imageSliderContainer: {
    // width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: width * 0.87,
    height: 260,
    borderRadius: 20,
    resizeMode: "cover",
    marginHorizontal: (width * 0.15) / 2,
  },
  tapToZoomText: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 10,
  },
  imageCountText: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: width,
    height: height,
    resizeMode: "contain",
  },
  modalBackButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  modalImageCountText: {
    position: "absolute",
    bottom: 30,
    color: "#fff",
    fontSize: 18,
  },
});

export default EntertainmentScreen;
