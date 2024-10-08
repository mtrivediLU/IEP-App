import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const IEPDetails = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x200' }} // Replace with the actual image URL or local asset
          style={styles.image}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.mainTitle}>What is IEP?</Text>
        <Text style={styles.subTitle}>“International Experience Program”</Text>

        {/* Description Section */}
        <Text style={styles.description}>
          The International Experience Program (IEP) is a prestigious initiative designed to enhance the global exposure of students.
          Launched in 2011, IEP represents a significant step by Gujarat Technological University (GTU) towards becoming an
          "International Innovative University." This program has grown to become one of the largest student mobility programs among
          technological universities in India.
        </Text>
        <Text style={styles.description}>
          Since its inception, more than 2,370 students have participated in IEP, finding their way to success in their academic and professional careers. By engaging in international collaborations, students are provided the opportunity to gain valuable global perspectives, industry-relevant skills, and experiences that prepare them for future challenges in an increasingly interconnected world.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    bottom: -20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
    marginBottom: 20,
  },
});

export default IEPDetails;