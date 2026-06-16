
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from "./src/screens/FeedScreen";
import FotoScreen from "./src/screens/FotoScreen";
import BuscaScreen from "./src/screens/BuscaScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FeedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FeedHome" component={FeedScreen} />
      <Stack.Screen name="Foto" component={FotoScreen} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FF4757",
        tabBarInactiveTintColor: "#A0A0A0",
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Feed") {
            return (
              <Feather
                name={focused ? "grid" : "grid"}
                size={size}
                color={color}
              />
            );
          }

          if (route.name === "Busca") {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={color}
              />
            );
          }

          return null;
        },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={{
          title: "Feed",
        }}
      />

      <Tab.Screen
        name="Busca"
        component={BuscaScreen}
        options={{
          title: "Busca",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    paddingTop: 6,
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },

  tabLabel: {
    fontSize: 10,
    fontWeight: "700",
  },
});