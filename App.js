import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";  // Import splash screen

// Import screens
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import IEPDetails from "./screens/IEPDetails";
import AboutUsScreen from "./screens/AboutUsScreen";
import Accommodation from "./screens/AccomodationScreen";
import ThingsToBring from "./screens/ThingsToBring";
import PlacesToVisit from "./screens/PlacesToVisit";
import FAQ from "./screens/FAQ";
import cafeandrestro from "./screens/cafeandrestro";
import AlumniContact from "./screens/AlumniContact";

// things to bring
import DocumentsDetail from "./screens/thingstobring/DocumentsDetail";
import StationaryDetail from "./screens/thingstobring/StationaryDetail";
import ElectronicsDetail from "./screens/thingstobring/ElectronicsDetail";
import EntertainmentDetail from "./screens/thingstobring/EntertainmentDetail";
import MiscellaneousDetail from "./screens/thingstobring/MiscellaneousDetail";
import PersonalCareDetail from "./screens/thingstobring/PersonalCareDetail";
import ClothingDetail from "./screens/thingstobring/ClothingDetail";
import SnacksDetail from "./screens/thingstobring/SnacksDetail";
import FinancialDetail from "./screens/thingstobring/FinancialDetail";

// Accommodation Imports
import EntertainmentScreen from "./screens/Accommodation/EntertainmentScreen";
import RoomScreen from "./screens/Accommodation/RoomScreen";
import LivingAreaScreen from "./screens/Accommodation/LivingAreaScreen";
import StudyRoomScreen from "./screens/Accommodation/StudyRoomScreen";
import DiningHallScreen from "./screens/Accommodation/DinningHallScreen";
import KitchenServicesScreen from "./screens/Accommodation/KitchenServicesScreen";

// Import screens from the Placetovisit folder
import BellPark from "./screens/Placetovisit/bellpark"; // lowercase
import GroceryStores from "./screens/Placetovisit/GroceryStores";
import LUPrivateBeach from "./screens/Placetovisit/LUprivatebeach";
import MoonlightBeach from "./screens/Placetovisit/Moonlightbeach";
import NewSudburyMall from "./screens/Placetovisit/newsudburymall";
import OnapingFalls from "./screens/Placetovisit/Onapingfalls";
import ScienceNorth from "./screens/Placetovisit/Sciencenorth";
import SliverCity from "./screens/Placetovisit/SliverCity";
import TrailsNearSudbury from "./screens/Placetovisit/Trailsnearsudbury";

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
    <Stack.Screen name="cafeandrestro" component={cafeandrestro} />
    <Stack.Screen name="AlumniContact" component={AlumniContact} />

    {/* Accommodation screens */}
    <Stack.Screen name="LivingAreaScreen" component={LivingAreaScreen} />
    <Stack.Screen name="EntertainmentScreen" component={EntertainmentScreen} />
    <Stack.Screen name="RoomScreen" component={RoomScreen} />
    <Stack.Screen name="StudyRoomScreen" component={StudyRoomScreen} />
    <Stack.Screen name="DiningHallScreen" component={DiningHallScreen} />
    <Stack.Screen
      name="KitchenServicesScreen"
      component={KitchenServicesScreen}
    />

    {/* Things to bring screens */}
    <Stack.Screen name="DocumentsDetail" component={DocumentsDetail} />
    <Stack.Screen name="StationaryDetail" component={StationaryDetail} />
    <Stack.Screen name="ElectronicsDetail" component={ElectronicsDetail} />
    <Stack.Screen name="EntertainmentDetail" component={EntertainmentDetail} />
    <Stack.Screen name="MiscellaneousDetail" component={MiscellaneousDetail} />
    <Stack.Screen name="PersonalCareDetail" component={PersonalCareDetail} />
    <Stack.Screen name="ClothingDetail" component={ClothingDetail} />
    <Stack.Screen name="SnacksDetail" component={SnacksDetail} />
    <Stack.Screen name="FinancialDetail" component={FinancialDetail} />

    {/* Placetovisit sub-pages */}
    <Stack.Screen name="BellPark" component={BellPark} />
    <Stack.Screen name="ScienceNorth" component={ScienceNorth} />
    <Stack.Screen name="LUPrivateBeach" component={LUPrivateBeach} />
    <Stack.Screen name="MoonlightBeach" component={MoonlightBeach} />
    <Stack.Screen name="NewSudburyMall" component={NewSudburyMall} />
    <Stack.Screen name="GroceryStores" component={GroceryStores} />
    <Stack.Screen name="OnapingFalls" component={OnapingFalls} />
    <Stack.Screen name="SlivercityTheatre" component={SliverCity} />
    <Stack.Screen name="TrailsNearSudbury" component={TrailsNearSudbury} />
  </Stack.Navigator>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Simulate a delay, e.g., 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (route.name === "About Us") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4CAF50", // Green color for active tab
          tabBarInactiveTintColor: "#6c757d", // Soft gray for inactive tab
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 5,
          },
          tabBarStyle: {
            backgroundColor: "#f8f9fa", // Light background for tab bar
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
          tabBarItemStyle: {
            marginVertical: 5,
          },
          tabBarIconStyle: {
            size: 30,
          },
          tabBarBackground: () => (
            <View
              style={{
                backgroundColor: "#f8f9fa", // Same light background as the tab bar
                borderRadius: 30,
                height: "100%",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.15,
                elevation: 10,
              }}
            />
          ),
          headerShown: false,
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
