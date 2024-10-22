import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient overlay
import { Ionicons } from '@expo/vector-icons'; // For icons

const { width } = Dimensions.get('window'); // Get the device width

const AboutUsScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:mtrivedi@laurentian.ca');
  };

  const handleCallPress = () => {
    Linking.openURL('tel:+917600044534');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section with gradient overlay */}
      <ImageBackground
        source={{ uri: 'https://source.unsplash.com/1600x900/?nature,water' }} // Replace with any URL for an image
        style={styles.heroSection}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}
          style={styles.heroOverlay}
        />
        <Text style={styles.heroTitle}>About Us</Text>
      </ImageBackground>

      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We are a group of enthusiastic individuals, all former participants of the International Experience Program (IEP), striving to improve the experience of future students. Our mission is to provide innovative solutions that make student life easier and more enjoyable, offering better guidance for new IEP participants.
        </Text>
      </View>

      {/* Team Section */}
      <View style={styles.sectionAlt}>
        <Text style={styles.sectionTitle}>Our Team</Text>
        <View style={styles.teamGrid}>
          {/* Team Member 1 - Mihir */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/Contacts/Mihir.png')}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Mihir Trivedi</Text>
            <Text style={styles.teamRole}>********</Text>
          </View>

          {/* Team Member 2 - Rudra */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/Contacts/Rudra.jpg')}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Rudra Rajyaguru</Text>
            <Text style={styles.teamRole}>*********</Text>
          </View>

          {/* Team Member 3 */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/Contacts/Achyut.jpg')}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Achyut Dobaria</Text>
            <Text style={styles.teamRole}>*********</Text>
          </View>

          {/* Team Member 4 */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/Contacts/Divyesh.jpg')}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Divyesh Thakur</Text>
            <Text style={styles.teamRole}>*********</Text>
          </View>

          {/* Team Member 5 */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/Contacts/vatsalya.jpg')}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Vatsalya Dabhi</Text>
            <Text style={styles.teamRole}>************</Text>
          </View>
        </View>
      </View>

      {/* Company Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Developed By</Text>
        <Text style={styles.sectionText}>
          This app is developed and maintained by <Text style={styles.companyName}>Global Tec Solution (GTS)</Text>, a company dedicated to providing high-quality digital solutions to enhance student experiences globally.
        </Text>
      </View>

      {/* Get In Touch Section */}
      <View style={styles.sectionAlt}>
        <Text style={styles.sectionTitle}>Get In Touch</Text>
        <Text style={styles.sectionText}>
          We would love to hear from you! Feel free to reach out to us at our email or phone number below.
        </Text>

        {/* Email Button */}
        <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
          <Ionicons name="mail" size={24} color="#fff" />
          <Text style={styles.buttonText}>Email Us</Text>
        </TouchableOpacity>

        {/* Call Button */}
        <TouchableOpacity style={styles.contactButton} onPress={handleCallPress}>
          <Ionicons name="call" size={24} color="#fff" />
          <Text style={styles.buttonText}>Call Us</Text>
        </TouchableOpacity>

        {/* Address Display (No Button) */}
        <View style={styles.addressContainer}>
          <Ionicons name="location" size={24} color="#4DA4E0" />
          <Text style={styles.addressText}>
            2062/ E, Sanskarmandal, Bhavnagar, Gujarat, India.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
    backgroundColor: '#f4f6f8', // Light background for modern look
  },
  heroSection: {
    position: 'relative',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  heroTitle: {
    fontSize: 42,
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
  },
  sectionAlt: {
    padding: 20,
    backgroundColor: '#eef2f3', // Light alternate background
    marginVertical: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 26,
    textAlign: 'center',
  },
  companyName: {
    fontWeight: 'bold',
    color: '#4DA4E0', // Highlight the company name in blue
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',  // Wraps items to the next row if screen width is smaller
    justifyContent: 'space-around',
  },
  teamMember: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    width: width * 0.1, // Each team member takes up 40% of the screen width
    minWidth: 120,  // Minimum width for each card
    margin: 5,  // Spacing around cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  teamRole: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  getInTouchSection: {
    padding: 20,
    backgroundColor: '#eef2f3',
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4DA4E0',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addressText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
});

export default AboutUsScreen;
