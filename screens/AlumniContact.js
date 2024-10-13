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
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const alumniData = [
  {
    id: "1",
    name: "Divyesh Thakur",
    role: "Student (CSE)",
    details: "IEP 2024",
    image: require("../assets/Contacts/Divyesh.jpg"), // Replace with actual image path
    phone: "+91 8980957241",
    email: "divyesh@example.com",
    instagram: "https://www.instagram.com/divyeshxthakur/", // Replace with actual Instagram URL
    linkedin: "https://www.linkedin.com/in/divyesh-thakur-82b75b220/", // Replace with actual LinkedIn URL
  },
  {
    id: "2",
    name: "Achyut Dobaria",
    role: "Student (CSE)",
    details: "IEP 2024",
    image: require("../assets/Contacts/Achyut.jpg"), // Replace with actual image path
    phone: "+91 9484673826",
    email: "achyutdobaria@gmail.com",
    instagram:
      "https://www.instagram.com/achyut_dobaria/profilecard/?igsh=YThsZ2lveXRwamFi", // Replace with actual Instagram URL
    linkedin:
      "https://www.linkedin.com/in/achyut-dobaria-3b0710201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", // Replace with actual LinkedIn URL
  },
  {
    id: "3",
    name: "Vatsalya Dabhi",
    role: "Student (CSE)",
    details: "IEP 2024",
    image: require("../assets/Contacts/vatsalya.jpg"), // Replace with actual image path
    phone: "+91 8758945141",
    email: "Vatsalyadabhi2003@gmail.com",
    instagram: "https://instagram.com/vatsalya", // Replace with actual Instagram URL
    linkedin: "https://linkedin.com/in/vatsalya", // Replace with actual LinkedIn URL
  },
  {
    id: "4",
    name: "Mihir Trivedi",
    role: "Teaching Assistant",
    details: "IEP 2016",
    image: require("../assets/Contacts/Mihir.png"), // Replace with actual image path
    phone: "+91 8758945141",
    email: "Vatsalyadabhi2003@gmail.com",
    instagram: "https://www.instagram.com/_mihir_trivedi/", // Replace with actual Instagram URL
    linkedin: "https://www.linkedin.com/in/mihirtrivedigm/", // Replace with actual LinkedIn URL
  },
];

const AlumniContacts = ({ navigation }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setSelectedContact(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedContact(null);
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
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
      <Ionicons name="chevron-forward-outline" size={24} color="#fff" />
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
          <Ionicons name="arrow-back" size={28} color="#000" />
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
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
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
                      <Text style={styles.modalInfoText}>
                        Phone: {selectedContact.phone}
                      </Text>
                      <Text style={styles.modalInfoText}>
                        Email: {selectedContact.email}
                      </Text>
                    </View>

                    <View style={styles.modalSocials}>
                      <Pressable
                        onPress={() =>
                          handleLinkPress(selectedContact.instagram)
                        }
                        style={styles.socialIconContainer}
                      >
                        <Ionicons
                          name="logo-instagram"
                          size={40}
                          color="#E1306C"
                        />
                        <Text style={styles.socialText}>Instagram</Text>
                      </Pressable>
                      <Pressable
                        onPress={() =>
                          handleLinkPress(selectedContact.linkedin)
                        }
                        style={styles.socialIconContainer}
                      >
                        <Ionicons
                          name="logo-linkedin"
                          size={40}
                          color="#0e76a8"
                        />
                        <Text style={styles.socialText}>LinkedIn</Text>
                      </Pressable>
                    </View>
                  </>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Ensures back button and text are properly aligned
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    paddingRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    height: 100,
    backgroundColor: "#4DA4E0",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  profileImage: {
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  role: {
    fontSize: 14,
    color: "#fff",
  },
  details: {
    fontSize: 12,
    color: "#d3e8ff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "85%",
  },
  modalCloseIcon: {
    alignSelf: "flex-end",
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  modalName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  modalRole: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 20,
  },
  modalInfoContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  modalInfoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalSocials: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  socialIconContainer: {
    alignItems: "center",
  },
  socialText: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default AlumniContacts;
