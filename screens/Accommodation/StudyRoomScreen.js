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
  require("../../assets/Accommodation/st1.jpg"),
  require("../../assets/Accommodation/st2.jpg"),
  require("../../assets/Accommodation/st3.jpg"), // Add your images here
  require("../../assets/Accommodation/st4.jpg"), // Add your images here
  require("../../assets/Accommodation/st5.jpg"), // Add your images here
  require("../../assets/Accommodation/st6.jpg"), // Add your images here
];

const StudyRoomScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const modalFlatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Function to handle scrolling and set the current index
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / (width * 0.85));
    setCurrentIndex(newIndex);
  };

  // Auto-scroll images every 3 seconds
  const handleNextImage = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle image click for zoom
  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  // Close zoom modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Handle scrolling in zoom modal
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
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Study Room</Text>

        <View style={{ width: 28 }} />
      </View>

      {/* Swipeable Images */}
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
        {/* Image Count */}
        <Text style={styles.imageCountText}>
          {currentIndex + 1} / {images.length}
        </Text>
        <Text style={styles.tapToZoomText}>Tap on the image to zoom</Text>
      </View>

      {/* Modal for zoomed images */}
      {isModalVisible && (
        <Modal visible={isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.modalBackButton}
            >
              <Ionicons name="close" size={30} color="#fff" />
            </TouchableOpacity>

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

            {/* Image count in modal */}
            <Text style={styles.modalImageCountText}>
              {selectedImageIndex + 1} / {images.length}
            </Text>
          </View>
        </Modal>
      )}

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Study Room Facility</Text>

        <Text style={styles.description}>
          The study room provides a quiet and comfortable space for all residents to focus on their academic work. It is equipped with individual desks, group work areas, and high-speed internet to meet all your study needs.
        </Text>

        <Text style={styles.description}>
          • Individual desks for personal study sessions.{"\n"}
          • Group work areas for collaborative tasks.{"\n"}
          • High-speed internet access to stay connected.{"\n"}
          • Air conditioning and heating for comfort throughout the year.{"\n"}
          • Quiet, distraction-free environment.
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
    backgroundColor: "#5ca7d8",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    width: 28,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    flex: 1,
  },
  imageSliderContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: width * 0.85,
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
  description: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
    lineHeight: 24,
  },
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

export default StudyRoomScreen;
