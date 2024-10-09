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
      title: "Dining Service",
      image: require("../assets/places.png"),
      details: "Dining service details and timings.",
      navigateTo: "DiningService",
    },
    {
      title: "Alumni Contact",
      image: require("../assets/contact.png"),
      details: "Contact information of alumni.",
      navigateTo: "AlumniContact",
    },
  ];

  const cardColors = [
    "#ffa69e",
    "#ffebb2",
    "#e29578",
    "#c2ddce",
    "#88d0ff",
    "#f2cc8f",
    "#a8b5e2",
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Adding StatusBar here to control the appearance */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title2}>Welcome Students</Text>
        <Text style={styles.title}>Explore AlumniLink</Text>

        {cardData.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              { backgroundColor: cardColors[index % cardColors.length] },
            ]}
            onPress={() => navigation.navigate(card.navigateTo)}
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  scrollContainer: { paddingHorizontal: 16, paddingBottom: 16 },
  title2: { fontSize: 18, fontWeight: "bold", marginTop: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  card: {
    borderRadius: 12,
    height: 150,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: { flexDirection: "row", alignItems: "center", height: "100%" },
  rowLeft: { flexDirection: "row" },
  rowRight: { flexDirection: "row-reverse" },
  icon: { width: 150, height: "100%", resizeMode: "cover" },
  iconLeft: { marginRight: 16 },
  textContainer: { flex: 1, paddingHorizontal: 10 },
  cardTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 4 },
  cardLink: { fontSize: 14, color: "#888" },
});

export default HomeScreen;
