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
    question: "Is there any type of local travel card we need to make for local traveling?",
    answer:
      "You can travel using your student id provided by LU initially. It might not work sometimes. If such an issue continues then you can buy a pass from downtown. Make sure to understand how it works.",
  },
  {
    id: "2",
    question: "What are the best options for dinner?",
    answer: "Instant food packets and if you can cook take the basic things with you including utensils. Otherwise, it can be costly to eat there.My suggestion - divide items amongst friends (cooker, rice, spices and so on) so weight is distributed and you can have a good meal.",
  },
  {
    id: "3",
    question: "How LU providing us internship there? Means which kind of assessment we have to do there? Are they going to give us a choice to select our field for internship!? ",
    answer:
      "For internship you have to do Individual project, you can do in any domain also you need to submit report as well as presentation for individual project.",
  },
  {
    id: "4",
    question: "How's the facilities of washing machine?",
    answer: "It is good. You should wash almost 2 weeks clothes in 1 go since it will cost you around $3.5 per wash, $1.75 for washing and $1.75 dryer. There is a dryer too for drying your clothes. (You can use it if your clothes don't dry directly since there isn't any area for hanging your clothes).Carry a string for that if you want.",
  },
  {
    id: "5",
    question: "When they will take us to the Wonderland, which one will we go to - amusement or waterpark?",
    answer: "Both will be accessible. You can cover as many rides as you wish, you need to buy wonderland tickets which is around $45. Inside, there is no further charges for almost all the rides except 2-3 rides. I recommend using app of wonderland in which after signing up it provides waiting time for all rides, so it will save up your time. Also, while buying the ticket include drink refill coupon which will be more beneficial, there are also free water facility.",
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
