import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated, // Import Animated for animations
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient for gradient backgrounds

const data = [
  {
    id: "1",
    title: "Entertainment",
    description: "Fun room with games and a big screen.",
    screen: "EntertainmentScreen",
    imageUrl: require("../assets/Entertainment.png"),
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
];

const AccommodationScreen = () => {
  const navigation = useNavigation();
  const scaleValue = new Animated.Value(1); // Animation state

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.9}
      onPress={() => navigation.navigate(item.screen)} // Ensure screen name is correct
    >
      <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
        <LinearGradient
          colors={['#f9f9f9', '#f1f1f1']}
          style={styles.gradientBackground}
        >
          <Image source={item.imageUrl} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={30}
            color="#fff"
            style={styles.iconButton}
          />
        </LinearGradient>
      </Animated.View>
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
    backgroundColor: "#f4f5f7", // Light background for better contrast
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    flex: 1,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16, // Increased rounding for modern feel
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  gradientBackground: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12, // Softer corners for images
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#e1e4e8",
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
  iconButton: {
    backgroundColor: "#007AFF", // Blue button background for arrow icon
    padding: 10,
    borderRadius: 50,
    overflow: "hidden",
  },
});

export default AccommodationScreen;
