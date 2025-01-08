import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  StatusBar, // Import StatusBar from react-native
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Import navigation
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const IEPDetails = () => {
  const navigation = useNavigation(); // Hook for navigation

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back
  };

  const handleKnowMorePress = () => {
    Linking.openURL("https://www.iep.gtu.ac.in/");
  };

  const handleHandbookPress = () => {
    Linking.openURL("https://www.iep.gtu.ac.in/IEP%20HANDBOOK%20%202024.pdf");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Set the StatusBar background color */}
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color="#000" />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>What is IEP?</Text>

          {/* Empty space to balance layout */}
          <TouchableOpacity style={styles.backButton}>
            {/* Empty button to balance the header layout */}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/IEP_group.jpg")} // Replace with the actual image URL or local asset
            style={styles.image}
          />
          <TouchableOpacity style={styles.button} onPress={handleKnowMorePress}>
            <Text style={styles.buttonText}>Know More</Text>
          </TouchableOpacity>
        </View>

        {/* Title Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>
            “International Experience Program”
          </Text>

          {/* Description Section */}
          <View style={styles.descriptionCard}>
            <Text style={styles.description}>
              The International Experience Program (IEP) is a prestigious
              initiative designed to enhance the global exposure of students.
              Launched in 2011, IEP represents a significant step by Gujarat
              Technological University (GTU) towards becoming an "International
              Innovative University." This program has grown to become one of
              the largest student mobility programs among technological
              universities in India.
            </Text>
            <Text style={styles.description}>
              Since its inception, more than 2,370 students have participated in
              IEP, finding their way to success in their academic and
              professional careers. By engaging in international collaborations,
              students are provided the opportunity to gain valuable global
              perspectives, industry-relevant skills, and experiences that
              prepare them for future challenges in an increasingly
              interconnected world.
            </Text>
          </View>
        </View>

        {/* IEP Handbook Download Button */}
        <View style={styles.handbookContainer}>
          <TouchableOpacity
            style={styles.handbookButton}
            onPress={handleHandbookPress}
          >
            <Ionicons name="download-outline" size={28} color="#fff" />
            <Text style={styles.handbookButtonText}>Download IEP Handbook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Match this background color to the StatusBar
  },
  headerContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 15,
    shadowColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensure equal horizontal spacing
    paddingHorizontal: 20, // Add padding for spacing
  },
  backButton: {
    width: 40, // Set width for alignment
    alignItems: "center", // Center icon horizontally
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  scrollContent: {
    paddingBottom: 60,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 }, // Enhanced shadow for modern look
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Increase elevation for a stronger shadow
  },
  button: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8, // Elevated button for floating effect
    marginTop: -30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },
  descriptionCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6, // Subtle elevation for card-like effect
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 26,
    textAlign: "justify",
    marginBottom: 20,
  },
  handbookContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  handbookButton: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 12, // Add elevation for a stronger button effect
    alignItems: "center",
  },
  handbookButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10, // Space between icon and text
  },
});

export default IEPDetails;
