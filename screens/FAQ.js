import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const faqData = [
  {
    id: "1",
    question: "Is Wi-Fi available in all rooms?",
    answer:
      "Yes, complimentary Wi-Fi is provided in all rooms and common areas. The connection is fast and reliable for work or entertainment.",
  },
  {
    id: "2",
    question: "What are the payment methods?",
    answer: "We accept cash, credit cards, and bank transfers for payment.",
  },
  {
    id: "3",
    question: "Can I request an extra bed?",
    answer:
      "Yes, extra beds are available upon request, subject to availability.",
  },
  {
    id: "4",
    question: "Is breakfast included?",
    answer: "Yes, breakfast is included with your stay at no extra cost.",
  },
  // Add more questions as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigation = useNavigation();

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      // Collapse if already expanded
      setActiveIndex(null);
    } else {
      // Expand the clicked accordion
      setActiveIndex(index);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>FAQs</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {faqData.map((item, index) => (
          <View key={item.id} style={styles.accordion}>
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={() => toggleAccordion(index)}
            >
              <Text style={styles.questionText}>{item.question}</Text>
              <Ionicons
                name={
                  index === activeIndex
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            {index === activeIndex && (
              <View style={styles.accordionContent}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f0fa", // Light background color
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  accordion: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  accordionContent: {
    paddingTop: 10,
  },
  answerText: {
    fontSize: 14,
    color: "#666",
  },
});

export default FAQ;
