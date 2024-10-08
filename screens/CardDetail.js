import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardDetail = ({ route }) => {
  const { title, details } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default CardDetail;
