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
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/Accommodation/r1.jpg"),
  require("../../assets/Accommodation/r2.jpg"),
  require("../../assets/Accommodation/r3.jpg"),
  require("../../assets/Accommodation/r4.jpg"),
  require("../../assets/Accommodation/r5.jpg"),
];

const RoomsScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const modalFlatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / (width * 0.85));
    setCurrentIndex(newIndex);
  };

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

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleModalScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setSelectedImageIndex(newIndex);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <Text style={styles.headerTitle}>Rooms</Text>

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

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Room Types</Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>• Single Rooms</Text>
            <Text style={styles.listItem}>• Double Rooms</Text>
            <Text style={styles.sectionTitle}>
              Each room comes furnished with:
            </Text>
            <Text style={styles.listItem}>• A bed</Text>
            <Text style={styles.listItem}>• A desk and chair</Text>
            <Text style={styles.listItem}>• A wardrobe/closet</Text>
            <Text style={styles.listItem}>
              • A bed with two built-in drawers
            </Text>
            <Text style={styles.listItem}>• A bookshelf</Text>
            <Text style={styles.listItem}>• A table fan</Text>
            <Text style={styles.listItem}>• Trash bin</Text>
            <Text style={styles.listItem}>• High-speed internet access</Text>
            <Text style={styles.listItem}>• Air conditioning / heating</Text>
          </View>

          {/* Adding the Dormitory Security Paragraph */}
          <Text style={styles.title}>Dormitory Safety and Security</Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              • 24/7 Security: Security personnel are on duty around the clock
              to ensure student safety.
            </Text>
            <Text style={styles.listItem}>
              • Access Control: Entry to the dormitory is restricted to
              residents and authorized personnel only, using key cards.
            </Text>
            <Text style={styles.listItem}>
              • Emergency Procedures: Clearly posted emergency exit plans and
              fire drills ensure that students are prepared for any situation.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#007AFF",
    marginTop: 10,
    marginBottom: 5,
  },
  listContainer: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    lineHeight: 24, // Increase line height for better readability
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

export default RoomsScreen;
