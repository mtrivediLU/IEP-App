import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView, // Import SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const data = [
  {
    id: "1",
    title: "Entertainment",
    description: "Fun room with games and a big screen.",
    screen: "EntertainmentScreen",
    imageUrl: require("../assets/Accommodation/Entertainment-1.png"),
  },
  {
    id: "2",
    title: "Rooms",
    description: "Comfortable and modern rooms.",
    screen: "RoomScreen",
    imageUrl: require("../assets/room.png"),
  },
  {
    id: "3",
    title: "Living Area",
    description: "Quiet and spacious living area.",
    screen: "LivingAreaScreen",
    imageUrl: require("../assets/living-room.png"),
  },
  {
    id: "4",
    title: "Study Room",
    description: "Peaceful study room.",
    screen: "StudyRoomScreen",
    imageUrl: require("../assets/study-room.png"),
  },
  {
    id: "5",
    title: "Dining Hall",
    description: "Dining hall with a variety of food options.",
    screen: "DiningHallScreen",
    imageUrl: require("../assets/dinning-hall.png"),
  },
  {
    id: "6",
    title: "Kitchen Services",
    description: "Equipped kitchen services.",
    screen: "KitchenServicesScreen",
    imageUrl: require("../assets/kitchen.jpg"),
  },
  // Additional items
];

const AccommodationScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)} // Ensure screen name is correct
    >
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Ionicons name="arrow-forward-circle-outline" size={30} color="#007AFF" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.header}>Accommodation</Text>
        <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    flex: 1,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});

export default AccommodationScreen;
