import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  Animated, // Import Animated for smooth effects
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const thingsToBringData = [
  {
    id: "1",
    title: "Documents",
    image: require("../assets/Thingstobring/Document.png"),
    backgroundColor: "rgba(209, 196, 233, 0.2)", // Muted lavender
    screen: "DocumentsDetail",
  },
  {
    id: "2",
    title: "Stationary",
    image: require("../assets/Thingstobring/Stationery.png"),
    backgroundColor: "rgba(179, 229, 252, 0.2)", // Muted light blue
    screen: "StationaryDetail",
  },
  {
    id: "3",
    title: "Electronics",
    image: require("../assets/Thingstobring/Electronics.png"),
    backgroundColor: "rgba(255, 204, 188, 0.2)", // Soft peach
    screen: "ElectronicsDetail",
  },
  {
    id: "4",
    title: "Entertainment",
    image: require("../assets/Thingstobring/Entertainment.png"),
    backgroundColor: "rgba(200, 230, 201, 0.2)", // Pale green
    screen: "EntertainmentDetail",
  },
  {
    id: "5",
    title: "Miscellaneous",
    image: require("../assets/Thingstobring/Miscellaneous.png"),
    backgroundColor: "rgba(255, 236, 179, 0.2)", // Light muted yellow
    screen: "MiscellaneousDetail",
  },
  {
    id: "6",
    title: "Personal Care",
    image: require("../assets/Thingstobring/personal_care.png"),
    backgroundColor: "rgba(248, 187, 208, 0.2)", // Soft pink
    screen: "PersonalCareDetail",
  },
  {
    id: "7",
    title: "Clothing",
    image: require("../assets/Thingstobring/Clothing.png"),
    backgroundColor: "rgba(207, 216, 220, 0.2)", // Light gray-blue
    screen: "ClothingDetail",
  },
  {
    id: "8",
    title: "Snacks",
    image: require("../assets/Thingstobring/Snacks.png"),
    backgroundColor: "rgba(255, 249, 196, 0.2)", // Pale yellow
    screen: "SnacksDetail",
  },
  {
    id: "9",
    title: "Financial Items",
    image: require("../assets/Thingstobring/Financial_items.png"),
    backgroundColor: "rgba(178, 223, 219, 0.2)", // Soft teal
    screen: "FinancialDetail",
  },
];

const ThingsToBring = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.backgroundColor }]}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.cardImage} />
      </View>
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Set the StatusBar background color */}
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <View style={styles.animatedContainer}>
        <View style={styles.headerContainer}>
          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color="#333" />
          </TouchableOpacity>

          {/* Centered Header */}
          <Text style={styles.header}>Things to Bring</Text>

          {/* Empty view for symmetrical spacing */}
          <View style={{ width: 28 }} />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={thingsToBringData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // White background
    padding: 16,
  },
  animatedContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003366", // Modern deep blue text
    flex: 1,
  },
  backButton: {
    marginRight: 10,
  },
  list: {
    paddingBottom: 80,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    borderRadius: 13, // Increased border radius for better separation
    alignItems: "center",
    justifyContent: "center",
    padding: 30, // Added padding to push image away from the border
    marginBottom: 20,
    width: "45%",
    shadowColor: "#00AEEF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(0, 174, 239, 0.3)", // Light blue border
    overflow: "hidden", // Ensures everything stays within card boundaries
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent White
  },
  imageContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // White with slight transparency
    borderRadius: 50,
    padding: 15, // Increased padding for better separation
    elevation: 2,
    shadowColor: "#00AEEF",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: -10, // Moves image slightly down to avoid overlap
    borderWidth: 2, // Add a border to separate image and card
    borderColor: "rgba(0, 174, 239, 0.4)", // Light Blue Border for the Image
  },
  cardImage: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
    marginTop: 12,
    letterSpacing: 0.5,
  },
});

export default ThingsToBring;
