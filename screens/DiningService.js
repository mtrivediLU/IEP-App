import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const DiningServices = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/places.png')} // Replace with your actual image path
            style={styles.image}
          />
        </View>

        {/* Title */}
        <Text style={styles.header}>Dining Services</Text>

        {/* Description Section */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Our dining services offer a variety of delicious and nutritious meals to keep you energized throughout your stay. 
            Whether you prefer vegetarian, non-vegetarian, or vegan options, we have something for everyone. Enjoy our buffet 
            with multiple cuisine options from around the world. We also offer special meals for those with dietary restrictions 
            upon request.
          </Text>
        </View>

        {/* Go Home Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
    marginBottom: 20,
  },
  descriptionContainer: {
    backgroundColor: '#4DA4E0',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DiningServices;
