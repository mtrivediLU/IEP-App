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
  ScrollView, // ScrollView for content scrolling
  Animated,   // Animated for transition effects
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/Accommodation/d1.jpg"),
  require("../../assets/Accommodation/d2.jpg"),
  require("../../assets/Accommodation/d3.jpg"),
  require("../../assets/Accommodation/d4.jpg"),
  require("../../assets/Accommodation/d5.jpg"),
];

const DiningHallScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const modalFlatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Fade-in animation for smooth screen transition
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Trigger fade-in animation when the screen loads
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {/* Header with back button and title */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>Dining Hall</Text>

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

        {/* Scrollable Details Section */}
        <ScrollView style={styles.detailsContainer}>
          <Text style={styles.title}>Cafeteria – Great Hall</Text>

          <Text style={styles.description}>
            - The Great Hall is the primary dining facility on campus. It
            provides cold drinks (coke, 7up, lemonade, etc.), cappuccino, hot
            chocolate, French vanilla, bread, buns, jam, butter, and more during
            meal times only. {"\n"}- Lunch is served daily, except on Saturday
            and Sunday. {"\n"}- Dinner is served only for the first 5 days of
            the week and during final exams.
          </Text>

          <Text style={styles.subTitle}>Cafés and Quick-Service Locations</Text>

          <Text style={styles.description}>
            <Text style={styles.boldText}>Tim Hortons{"\n"}</Text>
            - Location: Classroom building{"\n"}- Offerings: Coffee, tea,
            pastries, sandwiches, and other quick snacks.{"\n"}- Operating
            Hours: Open early morning to 3 pm during vacation.{"\n\n"}
            <Text style={styles.boldText}>Subway{"\n"}</Text>- Location: Near
            Great Hall{"\n"}- Offerings: Freshly made subs, salads, and wraps
            with various toppings and sauces.{"\n"}- Operating Hours: Closed
            during the vacation period.{"\n\n"}
            <Text style={styles.boldText}>Starbucks{"\n"}</Text>- Location: Near
            Library{"\n"}- Offerings: Specialty coffee drinks, teas, pastries,
            and light snacks.{"\n"}- Operating Hours: Closed during the
            vacation.{"\n\n"}
            <Text style={styles.boldText}>Café-Bistro{"\n"}</Text>- Location:
            East Residence building{"\n"}- Offerings: A range of hot and cold
            beverages and fresh food choices, including salads, samosas, and
            Panini (grilled sandwiches).{"\n"}- Operating Hours: Open from
            morning to evening, perfect for study breaks and social gatherings.
          </Text>
        </ScrollView>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 70, // Added padding for preventing bottom content overlap
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
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5ca7d8",
    marginTop: 15,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: "bold",
    color: "#007AFF",
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

export default DiningHallScreen;
