import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  Linking,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const alumniData = [
  {
    id: "1",
    name: "Mihir Trivedi",
    role: "Teaching Assistant at Laurentian",
    details: "IEP 2016",
    image: require("../assets/Contacts/Mihir.png"), // Replace with actual image path
    email: "mihirtrivedi@gmail.com",
    instagram: "https://www.instagram.com/_mihir_trivedi/",
    linkedin: "https://www.linkedin.com/in/mihirtrivedigm/",
  },
  {
    id: "2",
    name: "Divyesh Thakur",
    role: "Student (CSE)",
    details: "IEP 2024",
    image: require("../assets/Contacts/Divyesh.jpg"), // Replace with actual image path
    email: "divyesh@example.com",
    instagram: "https://www.instagram.com/divyeshxthakur/", // Replace with actual Instagram URL
    linkedin: "https://www.linkedin.com/in/divyesh-thakur-82b75b220/", // Replace with actual LinkedIn URL
  },
  {
    id: "3",
    name: "Achyut Dobaria",
    role: "Student (IT)",
    details: "IEP 2024",
    image: require("../assets/Contacts/Achyut.jpg"), // Replace with actual image path
    email: "achyutdobaria@gmail.com",
    instagram: "https://www.instagram.com/achyut_dobaria/",
    linkedin: "https://www.linkedin.com/in/achyut-dobaria-3b0710201",
  },
  {
    id: "4",
    name: "Vatsalya Dabhi",
    role: "Student (CSE)",
    details: "IEP 2024",
    image: require("../assets/Contacts/vatsalya.jpg"), // Replace with actual image path
    email: "Vatsalyadabhi2020@gmail.com",
    instagram: "https://www.instagram.com/vtsly_ofc/",
    linkedin: "https://www.linkedin.com/in/vatsalya-dabhi", // Replace with actual LinkedIn URL
  },
];

const AlumniContacts = ({ navigation }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial fade animation

  const openModal = (item) => {
    setSelectedContact(item);
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
    setSelectedContact(null);
  };

  // Function to open the email client
  const handleEmailPress = (email) => {
    Linking.openURL(`mailto:${email}`).catch((err) =>
      console.error("Failed to open email client:", err)
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#333" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button and Centered Text */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Alumni Contacts</Text>
      </View>

      <FlatList
        data={alumniData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal for displaying contact details */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={[styles.modalContainer, { opacity: fadeAnim }]}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <TouchableOpacity
                  onPress={closeModal}
                  style={styles.modalCloseIcon}
                >
                  <Ionicons name="close" size={28} color="#000" />
                </TouchableOpacity>

                {selectedContact && (
                  <>
                    <Image
                      source={selectedContact.image}
                      style={styles.modalImage}
                    />
                    <Text style={styles.modalName}>{selectedContact.name}</Text>
                    <Text style={styles.modalRole}>{selectedContact.role}</Text>
                    <Text style={styles.modalDetails}>
                      {selectedContact.details}
                    </Text>

                    <View style={styles.modalInfoContainer}>
                      {/* Pressable email text */}
                      <Pressable
                        onPress={() => handleEmailPress(selectedContact.email)}
                      >
                        <Text style={styles.modalInfoText}>
                          Email: {selectedContact.email}
                        </Text>
                      </Pressable>
                    </View>

                    <View style={styles.modalSocials}>
                      <Pressable
                        onPress={() =>
                          Linking.openURL(selectedContact.instagram)
                        }
                        style={styles.socialButton}
                      >
                        <Ionicons
                          name="logo-instagram"
                          size={28}
                          color="#E1306C"
                        />
                        <Text style={styles.socialText}>Instagram</Text>
                      </Pressable>
                      <Pressable
                        onPress={() =>
                          Linking.openURL(selectedContact.linkedin)
                        }
                        style={styles.socialButton}
                      >
                        <Ionicons
                          name="logo-linkedin"
                          size={28}
                          color="#0e76a8"
                        />
                        <Text style={styles.socialText}>LinkedIn</Text>
                      </Pressable>
                    </View>
                  </>
                )}
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8", // Light grey background
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#5ca7d8", // Light blue header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 80, // Prevent content from being hidden by the bottom
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderColor: "#4DA4E0", // Matching border color with header
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 14,
    color: "#666",
  },
  details: {
    fontSize: 12,
    color: "#888",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  modalCloseIcon: {
    alignSelf: "flex-end",
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderColor: "#4DA4E0",
    borderWidth: 2,
  },
  modalName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  modalRole: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
  },
  modalDetails: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 20,
    textAlign: "center",
  },
  modalInfoContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  modalInfoText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#007AFF", // Highlight the email text in blue
    textDecorationLine: "underline",
    textAlign: "center",
  },
  modalSocials: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  socialText: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default AlumniContacts;
