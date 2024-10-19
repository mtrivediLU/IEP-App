import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      {/* Chat Bubble Icon */}
      <Image 
        source={require('../assets/under_develop.jpg')} // Placeholder for chat image
        style={styles.image}
      />

      {/* Text for Under Development */}
      <Text style={styles.title}>Chat Section Under Development</Text>
      <Text style={styles.subText}>Stay tuned, we're building this feature for you!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Light background color
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.6, // 60% of screen width
    height: height * 0.3, // 30% of screen height
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF', // Primary color for title
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ChatScreen;
