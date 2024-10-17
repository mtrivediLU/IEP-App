import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const faqData = [
  {
    id: "1",
    question: "Is there any type of local travel card we need to make for local traveling?",
    answer:
      "You can travel using your student ID provided by LU initially. It might not work sometimes. If such an issue continues then you can buy a pass from downtown. Make sure to understand how it works.",
  },
  {
    id: "2",
    question: "What are the best options for dinner?",
    answer: "Instant food packets and if you can cook, take the basic things with you, including utensils. Otherwise, it can be costly to eat there. My suggestion - divide items amongst friends (cooker, rice, spices, and so on) so weight is distributed and you can have a good meal.",
  },
  {
    id: "3",
    question: "How is LU providing us internships? What kind of assessment do we have to do there?",
    answer:
      "For internships, you have to complete an individual project. You can choose any domain and submit a report and a presentation as part of the project.",
  },
  {
    id: "4",
    question: "How are the washing machine facilities?",
    answer:
      "The facilities are good. You should wash around two weeks' worth of clothes in one go, as it will cost you around $3.50 per wash ($1.75 for washing and $1.75 for drying). A dryer is available for drying your clothes. Carry a string for hanging clothes if you want.",
  },
  {
    id: "5",
    question: "When we go to Wonderland, will we have access to both the amusement and waterpark?",
    answer:
      "Yes, both will be accessible. You need to buy Wonderland tickets, which are around $45. Most rides are free once inside. I recommend using the Wonderland app, which provides wait times for rides and can save time.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigation = useNavigation();

  // Toggle the accordion and animate the layout change
  const toggleAccordion = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Smooth animation for expanding/collapsing
    if (index === activeIndex) {
      setActiveIndex(null); // Collapse if already expanded
    } else {
      setActiveIndex(index); // Expand the clicked accordion
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Enhanced Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>FAQs</Text>
      </View>

      {/* Scrollable FAQ Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {faqData.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.accordion,
              {
                backgroundColor:
                  index === activeIndex ? "#E8F0FE" : "#F2F6FE", // Subtle color change on expansion
              },
            ]}
          >
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={() => toggleAccordion(index)}
              activeOpacity={0.7}
            >
              <Ionicons
                name="help-outline"
                size={24}
                color={index === activeIndex ? "#007AFF" : "#666"}
                style={{ marginRight: 10 }}
              />
              <Text
                style={[
                  styles.questionText,
                  { color: index === activeIndex ? "#007AFF" : "#333" },
                ]}
              >
                {item.question}
              </Text>
              <Ionicons
                name={
                  index === activeIndex
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={24}
                color={index === activeIndex ? "#007AFF" : "#333"}
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
    backgroundColor: "#e6f0fa",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#5ca7d8", // Blue header like in other pages
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 10,
  },
  accordion: {
    backgroundColor: "#F2F6FE",
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    transition: "all 0.3s ease",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  accordionContent: {
    paddingTop: 10,
    backgroundColor: "#F8F9FD",
    borderRadius: 10,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#007AFF",
  },
  answerText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
});

export default FAQ;
