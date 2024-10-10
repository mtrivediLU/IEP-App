import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import IEPDetails from "./screens/IEPDetails";
import AboutUsScreen from "./screens/AboutUsScreen";
import Accommodation from "./screens/AccomodationScreen";
import ThingsToBring from "./screens/ThingsToBring";
import PlacesToVisit from "./screens/PlacesToVisit";
import FAQ from "./screens/FAQ";
import DiningService from "./screens/DiningService";
import AlumniContact from "./screens/AlumniContact";
//things to bring
import DocumentsDetail from './screens/thingstobring/DocumentsDetail'; // Add individual detail screens
import StationaryDetail from './screens/thingstobring/StationaryDetail';
import ElectronicsDetail from './screens/thingstobring/ElectronicsDetail';
import EntertainmentDetail from './screens/thingstobring/EntertainmentDetail';
import MiscellaneousDetail from './screens/thingstobring/MiscellaneousDetail';
import PersonalCareDetail from './screens/thingstobring/PersonalCareDetail';

// Create Stack Navigator for Home-related screens
const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="IEPDetails" component={IEPDetails} />
    <Stack.Screen name="Accommodation" component={Accommodation} />
    <Stack.Screen name="ThingsToBring" component={ThingsToBring} />
    <Stack.Screen name="PlacesToVisit" component={PlacesToVisit} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="DiningService" component={DiningService} />
    <Stack.Screen name="AlumniContact" component={AlumniContact} />
    {/* Add navigation for individual card details from ThingsToBring */}
    <Stack.Screen name="DocumentsDetail" component={DocumentsDetail} />
    <Stack.Screen name="StationaryDetail" component={StationaryDetail} />
    <Stack.Screen name="ElectronicsDetail" component={ElectronicsDetail} />
    <Stack.Screen name="EntertainmentDetail" component={EntertainmentDetail} />
    <Stack.Screen name="MiscellaneousDetail" component={MiscellaneousDetail} />
    <Stack.Screen name="PersonalCareDetail" component={PersonalCareDetail} />
  </Stack.Navigator>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Chat") {
              iconName = "chatbubble-outline";
            } else if (route.name === "About Us") {
              iconName = "information-circle-outline";
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#0052CC",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 5,
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 30,
            height: 70,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 5 },
            elevation: 5,
          },
          headerShown: false, // Disable header for tabs
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{ tabBarLabel: "Chat" }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUsScreen}
          options={{ tabBarLabel: "About Us" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
