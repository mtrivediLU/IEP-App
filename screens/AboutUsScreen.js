import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const AboutUsScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:mtrivedi@laurentian.ca');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={{ uri: 'https://source.unsplash.com/1600x900/?nature,water' }}
        style={styles.heroSection}
      >
        <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']} style={styles.heroOverlay} />
        <Text style={styles.heroTitle}>About Us</Text>
      </ImageBackground>

      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We are a group of enthusiastic individuals, all former participants of the International Experience Program (IEP), striving to improve the experience of future students. Our mission is to provide innovative solutions that make student life easier and more enjoyable, offering better guidance for new IEP participants.
        </Text>
      </View>

      {/* Our Team Section */}
      <View style={styles.teamSection}>
        <Text style={styles.sectionTitle}>Our Team</Text>

        {/* Developers Section */}
        <Text style={styles.subSectionTitle}>Developers</Text>
        <View style={styles.teamRow}>
          <View style={styles.teamMember}>
            <Image source={require('../assets/Contacts/Achyut.jpg')} style={styles.teamImage} />
            <Text style={styles.teamName}>Achyut Dobaria</Text>
            <Text style={styles.teamRole}>Developer</Text>
          </View>

          <View style={styles.teamMember}>
            <Image source={require('../assets/Contacts/Divyesh.jpg')} style={styles.teamImage} />
            <Text style={styles.teamName}>Divyesh Thakur</Text>
            <Text style={styles.teamRole}>Developer</Text>
          </View>

          <View style={styles.teamMember}>
            <Image source={require('../assets/Contacts/vatsalya.jpg')} style={styles.teamImage} />
            <Text style={styles.teamName}>Vatsalya Dabhi</Text>
            <Text style={styles.teamRole}>Developer</Text>
          </View>
        </View>

        {/* Mentors Section */}
        <Text style={styles.subSectionTitle}>Mentors</Text>
        <View style={styles.teamRow}>
          <View style={styles.teamMember}>
            <Image source={require('../assets/Contacts/Dr.Ratvinder_grewal.jpeg')} style={styles.teamImage} />
            <Text style={styles.teamName}>Dr. Ratvinder Grewal</Text>
            <Text style={styles.teamRole}>Associate Professor at Laurentian University</Text>
          </View>

          <View style={styles.teamMember}>
            <Image source={require('../assets/Contacts/Mihir.png')} style={styles.teamImage} />
            <Text style={styles.teamName}>Mihir Trivedi</Text>
            <Text style={styles.teamRole}>Software Developer - LoopX</Text>
          </View>

          <View style={styles.teamMember}>
            <Image source={require('../assets/Contacts/Rudra.jpg')} style={styles.teamImage} />
            <Text style={styles.teamName}>Rudra Rajyaguru</Text>
            <Text style={styles.teamRole}>Assistant System Engineer - Tata Consultancy Services</Text>
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
          We would love to hear from you! Feel free to reach out to us via email below.
        </Text>

        {/* Email Button */}
        <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
          <Ionicons name="mail" size={24} color="#fff" />
          <Text style={styles.buttonText}>Email Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
    backgroundColor: '#f4f6f8',
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
    marginHorizontal: 16,
  },
  sectionAlt: {
    padding: 20,
    backgroundColor: '#eef2f3',
    marginVertical: 15,
    borderRadius: 15,
    marginHorizontal: 16,
  },
  teamSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#EEF2F3', // Light Background for Team Section
    borderRadius: 15,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  subSectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Ensures even spacing
    flexWrap: 'wrap', // Ensures all members fit in one row
    width: '100%',
  },
  teamMember: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '30%', // Ensures 3 Cards per Row
    minWidth: 110,
    marginHorizontal: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamImage: {
    width: 75,
    height: 75,
    borderRadius: 37.5, // Ensures Circular Image
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  teamRole: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginTop: 2,
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
});

export default AboutUsScreen;
