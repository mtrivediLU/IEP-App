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
  {
    id: "6",
    question: "What amount should we carry approx. And should we get a forex card or cash?",
    answer:
      "As much as you can afford card helps some cash is okay but to carry it is your responsibility if you can get a card, I suggest you should. Around 600 dollars plus more if you wish to shop stuff to bring back home. But also carry cash in more amount because here it accepts only credit card in online transactions.",
  },
  {
    id: "7",
    question: "Per floor how many kitchen and bathroom are?",
    answer:
      "Per floor 1 kitchen and 1 common washroom facility (4 toilets and 3 bathrooms and 4 sinks) also 1 TV room.",
  },
  {
    id: "8",
    question: "How far is the local market from the campus?",
    answer:
      "It is a little far. You cannot afford going there as and when required. You can easily reach there using the bus but doing that daily would not fit your routine so make a list before you go. Walmart is an option. you can use bus for travelling.",
  },
  {
    id: "9",
    question: "Are there any specific hours during which we are allowed to be outside at night?",
    answer:
      "Yes and no. It's just that if you have the id card with you, you can have access to the building otherwise no. There were no time limits during our time there. They did mention 10 PM in their instructions. Follow the instructions given because it can be unsafe. There are bears in the area. Rare but at night you should not take any risks. And on campus if you're out make sure you are in groups.",
  },
  {
    id: "10",
    question: "Is there a need to take extension board?",
    answer:
      "Extension board may help so if you can carry one per group that can work. It's not necessary. Do buy the universal adapter.",
  },
  {
    id: "11",
    question: "what will be in lunch?",
    answer:
      "Indian i.e. Dal, Rice, Naan, Sabji, Fruit, Sweet, Buttermilk, pasta and pizza, burger, etc. the food was nice. If you eat properly, you won't feel hungry till 6-7 Hr.",
  },
  {
    id: "12",
    question: "What are the timings of the college?",
    answer:
      "9am to 12pm. For yours they will share the timetable.",
  },
  {
    id: "13",
    question: "Which stationery items is required?",
    answer:
      "2 notebooks for each sub and basic stationery is enough. Take a Calculator with you. Also bring some blank white sheet A4 size papers.",
  },
  {
    id: "14",
    question: "How are they gonna grade our paper and what will be the paper style?",
    answer:
      "Depends on faculty. They will inform these things in the beginning.",
  },
  {
    id: "15",
    question: "How's the weather there when you were there?",
    answer:
      "A few days in the beginning were cloudy and rainy. A little like winter. Day time would be nice but early morning and late night will be chilly like Indian winter.",
  },
  {
    id: "16",
    question: "Should we take a blanket with us?",
    answer:
      "Blanket will be provided.",
  },
  {
    id: "17",
    question: "In room there will be heater or not?",
    answer:
      "You need to issue heater from porter according to your need.",
  },
  {
    id: "18",
    question: "Is there a fixed hour for using the kitchen?",
    answer:
      "No fixed hour to use kitchen. You can use it as you wish. But you need to take care about smoke detector.",
  },
  {
    id: "19",
    question: "Do we get Wi-Fi facility in our residence?",
    answer:
      "Yes.",
  },
  {
    id: "20",
    question: "There will be a travel converter/ adaptor necessary?",
    answer:
      "Yes, Required.",
  },
  {
    id: "21",
    question: "Idea about dishwasher facility?",
    answer:
      "No, Dishwasher facility.",
  },
  {
    id: "22",
    question: "We need to carry detergent, right?",
    answer:
      "YES, but in small quantity as you might do laundry only 2-3 times.",
  },
  {
    id: "23",
    question: "In campus- do u any idea of coffee price?",
    answer:
      "Coffee price varies starting from ~$2.5. Normally, Iced coffee and French vanilla costed around $3-5.",
  },
  {
    id: "24",
    question: "In campus, which shop/cafe is there?",
    answer:
      "There's Tim Hortons for coffee and some snacks but even that will close after 3pm (confirm the timings once you get there.) there are other shops too but as they have break during our visit none of them are open and we didn't really visit which may have been open. ",
  },
  {
    id: "25",
    question: "The Subject which we will be studying there - its material will be provided by faculty (pdf) or we have to go library?",
    answer:
      "Material will be provided. If you need anything else from the provided material discuss it with the faculty. They are very helpful.",
  },
  {
    id: "26",
    question: "What about drinking water - is there a facility for it or we have to buy water bottles??",
    answer:
      "In hostel, the staff informed us during orientation that any tap water in the building is drinking water. No need to buy water at all. One tap will be there in the kitchen per floor",
  },

  {
    id: "27",
    question: "Do we need to pay for using basketball court or volleyball court?",
    answer:
      "No.",
  },{
    id: "28",
    question: "Classroom and Library Facilities",
    answer: `
      Classroom Facilities:
      1. Lecture Halls - Large lecture rooms equipped with modern AV technology.
      2. Seminar Rooms - Smaller, intimate rooms designed for discussions and group work.
      3. Laboratories - Specialized rooms for science, engineering, and computer studies.
      4. Study Rooms - Quiet rooms for individual or group study.
      
      Library Facilities:
      1. Main Reading Room:
        - The central area for reading and studying.
        - Large tables, individual desks, and quiet zones.
      2. Reference Section:
        - Area housing encyclopaedias, dictionaries, and other reference materials.
        - Quiet study environment.
      3. Special Collections:
        - Contains rare books, manuscripts, and archival materials.
        - Access may be restricted to certain users.
      4. Quiet Study Areas:
        - Designated silent zones for focused study.
        - Strict no-talking policy.
      5. Circulation Desk:
        - Main service point for borrowing and returning books.
        - Staff available for assistance.
      6. Help Desk:
        - Provides assistance with research and finding resources.
        - Staffed by librarians and research assistants.
      7. Periodicals Section:
        - Area for journals, magazines, and newspapers.
        - Includes current and archived issues.
    `,
  },
  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigation = useNavigation();

  // Toggle the accordion and animate the layout change
  const toggleAccordion = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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
    flex: 1, // Ensures the FAQ section takes full screen height
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
    paddingBottom: 80, // Add padding to prevent content from being hidden by bottom navigation
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
