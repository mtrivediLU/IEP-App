import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient overlay

const { width } = Dimensions.get('window');

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section with gradient overlay */}
      <View style={styles.heroSection}>
        <Image
          source={require('../assets/places.png')} // Replace with your own image
          style={styles.heroImage}
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}
          style={styles.heroOverlay}
        />
        <Text style={styles.heroTitle}>About Us</Text>
      </View>

      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We strive to provide our users with the best experience possible by creating innovative solutions that make life easier and more enjoyable.
        </Text>
      </View>

      {/* Team Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Team</Text>
        <View style={styles.teamContainer}>
          {/* Team Member 1 */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/places.png')} // Replace with your own image
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>John Doe</Text>
            <Text style={styles.teamRole}>CEO & Founder</Text>
          </View>

          {/* Team Member 2 */}
          <View style={styles.teamMember}>
            <Image
              source={require('../assets/places.png')} // Replace with your own image
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Jane Smith</Text>
            <Text style={styles.teamRole}>CTO</Text>
          </View>

          {/* Add more team members as needed */}
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <Text style={styles.contactText}>
          Email: contact@ourapp.com
        </Text>
        <Text style={styles.contactText}>
          Phone: +123 456 7890
        </Text>
        <Text style={styles.contactText}>
          Address: 123 App Street, Silicon Valley, CA
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
  },
  heroSection: {
    position: 'relative',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  heroTitle: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  teamMember: {
    alignItems: 'center',
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  teamRole: {
    fontSize: 14,
    color: '#777',
  },
  contactText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default AboutUsScreen;
