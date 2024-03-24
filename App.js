import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import "./App.css";

import Home from "./components/pages/Home/HomeContainer";
import HomeIcon from "./components/icons/homeIcon";

import Workouts from "./components/pages/Workouts/WorkoutsContainer";
import TopCrypto from "./components/icons/topCryptoIcon";

import Profile from "./components/pages/Profile/ProfileContainer";
import LearnIcon from "./components/icons/learnIcon";

import Randomizer from "./components/pages/Randomizer/RandomizerContainer";
import PodcastIcon from "./components/icons/podcastIcon";

import BitcoinIcon from "./components/icons/bitcoinIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;

            if (route.name === "Home") {
              iconComponent = <HomeIcon isActive={focused} />;
            } else if (route.name === "Learn") {
              iconComponent = <LearnIcon isActive={focused} />;
            } else if (route.name === "Podcast") {
              iconComponent = <PodcastIcon isActive={focused} />;
            } else if (route.name === "Top crypto") {
              iconComponent = <TopCrypto isActive={focused} />;
            } else if (route.name === "Bitcoin") {
              iconComponent = <BitcoinIcon isActive={focused} />;
            }

            return iconComponent;
          },
          headerShown: false,
          tabBarLabel: () => null, // Remove labels
          tabBarStyle: {
            backgroundColor: "#19102B",
            border: "1px solid #312745",
            height: 85, // Adjust the height to make the icons bigger
          },
        })}
        tabBarOptions={{
          activeTintColor: "#6b0ecf",
          inactiveTintColor: "#6B7280",
          style: {},
          labelStyle: {
            display: "none", // Remove label
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Learn" component={Workouts} />
        <Tab.Screen name="Bitcoin" component={Workouts} />
        <Tab.Screen name="Podcast" component={Randomizer} />
        <Tab.Screen name="Top crypto" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
