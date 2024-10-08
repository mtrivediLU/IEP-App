import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;


// header: {
//   backgroundColor: '#5CA7D8', // Background color of the header
//   paddingVertical: 15, // Padding for height of the header
//   paddingHorizontal: 16, // Padding for the sides
//   marginTop: 0,
//   justifyContent: 'left',
// },
// headerText: {
//   color: '#fff', // Text color
//   fontSize: 20, // Font size for app name
//   fontWeight: 'bold', // Bold text for prominence
//   paddingTop: 19,
  
// },
