import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const HomeScreen = ({ navigation }) => {
  const cardData = [
    {
      title: "What is IEP (GTU)?",
      image: require("../assets/nerw.png"),
      details: "Details about the IEP (GTU) program.",
      navigateTo: "IEPDetails",
    },
    {
      title: "Accommodation",
      image: require("../assets/accommodation.png"),
      details: "Information about accommodation facilities.",
      navigateTo: "Accommodation",
    },
    {
      title: "Things To Bring",
      image: require("../assets/bring.png"),
      details: "A list of things to bring for your stay.",
      navigateTo: "ThingsToBring",
    },
    {
      title: "Places To Visit",
      image: require("../assets/places.png"),
      details: "Top places to visit during your stay.",
      navigateTo: "PlacesToVisit",
    },
    {
      title: "Frequently Asked Questions",
      image: require("../assets/faq.png"),
      details: "Frequently asked questions and answers.",
      navigateTo: "FAQ",
    },
    {
      title: "Cafes & Restaurants",
      image: require("../assets/places.png"),
      details: "Dining service details and timings.",
      navigateTo: "cafeandrestro",
    },
    {
      title: "Alumni Contact",
      image: require("../assets/contact.png"),
      details: "Contact information of alumni.",
      navigateTo: "AlumniContact",
    },
  ];

  const cardGradients = [
    ["#ff9a9e", "#fad0c4"],
    ["#ffecd2", "#fcb69f"],
    ["#a1c4fd", "#c2e9fb"],
    ["#fbc2eb", "#a6c1ee"],
    ["#fad0c4", "#ffd1ff"],
    ["#89f7fe", "#66a6ff"],
    ["#f3e7e9", "#e3eeff"],
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* StatusBar to control the appearance */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={false} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title2}>Welcome Students</Text>
        <Text style={styles.title}>Explore AlumniLink</Text>

        {cardData.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            activeOpacity={0.85}
            onPress={() => navigation.navigate(card.navigateTo)}
          >
            {/* Apply Linear Gradient Background */}
            <LinearGradient
              colors={cardGradients[index % cardGradients.length]}
              style={styles.card}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View
                style={[
                  styles.cardContent,
                  index % 2 === 0 ? styles.rowLeft : styles.rowRight,
                ]}
              >
                <Image
                  source={card.image}
                  style={[styles.icon, index % 2 === 0 ? styles.iconLeft : null]}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardLink}>Show More →</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7", // Light background color for modern look
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 80, // Prevents overlap with bottom navigation
  },
  title2: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#666",
    textAlign: "center", // Centered for a modern approach
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  cardContainer: {
    borderRadius: 16,
    overflow: "hidden", // Ensures corners are rounded
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    height: 150,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6, // Subtle shadow for depth
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  rowLeft: {
    flexDirection: "row",
  },
  rowRight: {
    flexDirection: "row-reverse",
  },
  icon: {
    width: 120,
    height: 120,
    borderRadius: 12,
    resizeMode: "cover",
  },
  iconLeft: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff", // Set to white for contrast
    textShadowColor: "#000", // Add shadow for better visibility
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  cardLink: {
    fontSize: 14,
    color: "#fff", // Ensure this is also white
    textShadowColor: "#000", // Add shadow for better visibility
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default HomeScreen;
