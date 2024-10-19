import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Animated, // For adding transition effects
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/Accommodation/k1.jpg"),
  require("../../assets/Accommodation/k2.jpg"),
  require("../../assets/Accommodation/k3.jpg"),
  require("../../assets/Accommodation/k4.jpg"),
];

const KitchenServicesScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fade-in animation for screen transition
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

  // Function to auto-slide images every 3 seconds
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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
          <Text style={styles.headerTitle}>Kitchen Services</Text>

          {/* Spacer for proper centering */}
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
            renderItem={({ item }) => (
              <TouchableOpacity>
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
        </View>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Kitchen Facility</Text>
          <Text style={styles.description}>
            Laurentian University provides well-equipped kitchen facilities to
            students who prefer to prepare their own meals.
          </Text>
          <Text style={styles.subTitle}>Appliances</Text>
          <Text style={styles.description}>
            - Per floor: 2 Stovetops and Ovens {"\n"}
            - Microwaves {"\n"}
            - Refrigerators and Freezers {"\n"}
            - Dining table and chairs {"\n"}
            - Trash Bins and Recycling Bins: Strategically placed for easy waste
            disposal. {"\n"}
            - Pantry Shelves {"\n"}
            - Two wash basins {"\n"}
            - Fire Extinguishers
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 100, // To avoid text overlapping with bottom navigation
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
});

export default KitchenServicesScreen;
