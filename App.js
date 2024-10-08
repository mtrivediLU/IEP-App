import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import IEPDeatils from './screens/IEPDetails';
import AboutUsScreen from './screens/AboutUsScreen';
import Accommodation from './screens/Accommodation';
import ThingsToBring from './screens/ThingsToBring';
import PlacesToVisit from './screens/PlacesToVisit';
import FAQ from './screens/FAQ';
import DiningService from './screens/DiningService';
import AlumniContact from './screens/AlumniContact';

// Create Stack Navigator for Home-related screens
const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="IEPDetails" component={IEPDeatils} />
    <Stack.Screen name="Accommodation" component={Accommodation} />
    <Stack.Screen name="ThingsToBring" component={ThingsToBring} />
    <Stack.Screen name="PlacesToVisit" component={PlacesToVisit} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="DiningService" component={DiningService} />
    <Stack.Screen name="AlumniContact" component={AlumniContact} />
  </Stack.Navigator>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = 'chatbubble-outline';
            } else if (route.name === 'About Us') {
              iconName = 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#0052CC',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 5,
          },
          tabBarStyle: {
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 30,
            height: 70,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 5 },
            elevation: 5,
          },
          headerShown: false, // Disable header for tabs
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarLabel: 'Chat' }} />
        <Tab.Screen name="About Us" component={AboutUsScreen} options={{ tabBarLabel: 'About Us' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
