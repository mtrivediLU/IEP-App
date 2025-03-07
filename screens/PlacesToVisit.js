import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar, // Import StatusBar from react-native
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Data for places to visit
const placesData = [
  {
    id: "1",
    title: "Bell Park",
    description: "Sudbury, near science north",
    image: require("../assets/Placetovisit/b3.jpg"), // Ensure valid image path
    screen: "BellPark", // The target screen name for navigation
  },
  {
    id: "2",
    title: "Science North",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/b2.jpg"), // Ensure valid image path
    screen: "ScienceNorth",
  },
  {
    id: "3",
    title: "LU Private Beach",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/lu1.jpg"), // Ensure valid image path
    screen: "LUPrivateBeach",
  },
  {
    id: "4",
    title: "Moonlight Beach",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/m2.jpg"), // Ensure valid image path
    screen: "MoonlightBeach",
  },
  {
    id: "5",
    title: "New Sudbury Mall",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/n1.jpg"), // Ensure valid image path
    screen: "NewSudburyMall",
  },
  {
    id: "6",
    title: "Grocery Stores",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/s1.jpg"), // Ensure valid image path
    screen: "GroceryStores",
  },
  {
    id: "7",
    title: "Onaping Falls",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/o1.jpg"), // Ensure valid image path
    screen: "OnapingFalls",
  },
  {
    id: "8",
    title: "Silvercity Theatre",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/sc1.jpg"), // Ensure valid image path
    screen: "SlivercityTheatre",
  },
  {
    id: "9",
    title: "Trails New Sudbury",
    description: "Niagara Falls",
    image: require("../assets/Placetovisit/t2.jpg"), // Ensure valid image path
    screen: "TrailsNearSudbury",
  },
  // Add more places...
];

const PlacesToVisit = () => {
  const navigation = useNavigation(); // Use navigation for navigating between screens

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)} // Navigate to the screen based on the 'screen' field
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Set the StatusBar background color */}
      <StatusBar backgroundColor="#f0f4f8" barStyle="dark-content" />

      {/* Header with back button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        {/* Centered Title */}
        <Text style={styles.header}>Places to Visit</Text>

        {/* Empty view for symmetrical spacing */}
        <View style={{ width: 28 }} />
      </View>

      {/* FlatList for displaying places */}
      <FlatList
        data={placesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 80 }} />} // Adds space at the bottom
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8", // Light background color for a modern look
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
    paddingVertical: 5, // Reduced vertical padding to remove extra space
    justifyContent: "space-between", // To ensure equal space between back button and title
  },
  backButton: {
    marginRight: 16,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    flex: 1, // Ensures the header is centered
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default PlacesToVisit;
