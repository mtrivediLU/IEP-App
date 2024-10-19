import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const thingsToBringData = [
  {
    id: "1",
    title: "Documents",
    image: require("../assets/Thingstobring/Document.png"),
    backgroundColor: "#D1C4E9", // Muted lavender
    screen: "DocumentsDetail",
  },
  {
    id: "2",
    title: "Stationary",
    image: require("../assets/Thingstobring/Stationery.png"),
    backgroundColor: "#B3E5FC", // Muted light blue
    screen: "StationaryDetail",
  },
  {
    id: "3",
    title: "Electronics",
    image: require("../assets/Thingstobring/Electronics.png"),
    backgroundColor: "#FFCCBC", // Soft peach
    screen: "ElectronicsDetail",
  },
  {
    id: "4",
    title: "Entertainment",
    image: require("../assets/Thingstobring/Entertainment.png"),
    backgroundColor: "#C8E6C9", // Pale green
    screen: "EntertainmentDetail",
  },
  {
    id: "5",
    title: "Miscellaneous",
    image: require("../assets/Thingstobring/Miscellaneous.png"),
    backgroundColor: "#FFECB3", // Light muted yellow
    screen: "MiscellaneousDetail",
  },
  {
    id: "6",
    title: "Personal Care",
    image: require("../assets/Thingstobring/personal_care.png"),
    backgroundColor: "#F8BBD0", // Soft pink
    screen: "PersonalCareDetail",
  },
  {
    id: "7",
    title: "Clothing",
    image: require("../assets/Thingstobring/Clothing.png"),
    backgroundColor: "#CFD8DC", // Light gray-blue
    screen: "ClothingDetail",
  },
  {
    id: "8",
    title: "Snacks",
    image: require("../assets/Thingstobring/Snacks.png"),
    backgroundColor: "#FFF9C4", // Pale yellow
    screen: "SnacksDetail",
  },
  {
    id: "9",
    title: "Financial Items",
    image: require("../assets/Thingstobring/Financial_items.png"),
    backgroundColor: "#B2DFDB", // Soft teal
    screen: "FinancialDetail",
  },
];

const ThingsToBring = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Trigger fade-in animation when the component is loaded
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second for fade-in
      useNativeDriver: true,
    }).start();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.backgroundColor }]}
      onPress={() => navigation.navigate(item.screen)} // Navigate to respective detail screen
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.cardImage} />
      </View>
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim }]}>
        <View style={styles.headerContainer}>
          {/* Back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={28} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.header}>Things to Bring</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={thingsToBringData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list} // This is where the padding is added
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
    padding: 16,
  },
  animatedContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#007AFF",
    flex: 1, // Ensures the header is centered
  },
  list: {
    paddingBottom: 80, // Adding padding to avoid content being overlapped by the bottom navigation
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginBottom: 20,
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 15,
    elevation: 2,
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333", // Darker text for better readability
    textAlign: "center",
    marginTop: 12,
    letterSpacing: 0.5, // Slight letter spacing for a modern look
  },
});

export default ThingsToBring;
