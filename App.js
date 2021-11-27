import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { countries } from "./constants/dummy";
import side_drawer from "./constants/icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import EmptyScreen1 from "./Screens/EmptyScreen1";
import EmptyScreen2 from "./Screens/EmptyScreen2";
import EmptyScreen3 from "./Screens/EmptyScreen3";
import Explore from "./Screens/Explore";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get("screen");

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, backgroundColor: "black" },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  width: width * 0.08,
                  height: width * 0.08,

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("./assets/icons/maps.png")}
                  style={{
                    resizeMode: "contain",
                    width: "90%",
                    tintColor: props.focused
                      ? "#6E91BF"
                      : "rgba(255,255,255,0.5)",
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="EmptyScreen1"
        component={EmptyScreen1}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  width: width * 0.08,
                  height: width * 0.08,

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("./assets/icons/bookmark.png")}
                  style={{
                    resizeMode: "contain",
                    width: "90%",
                    tintColor: props.focused
                      ? "#6E91BF"
                      : "rgba(255,255,255,0.5)",
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="EmptyScreen2"
        component={EmptyScreen2}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  width: width * 0.08,
                  height: width * 0.08,

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("./assets/icons/calendar.png")}
                  style={{
                    resizeMode: "contain",
                    width: "90%",
                    tintColor: props.focused
                      ? "#6E91BF"
                      : "rgba(255,255,255,0.5)",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="EmptyScreen3"
        component={EmptyScreen3}
        options={{
          tabBarIcon: (props) => {
            return (
              <View
                style={{
                  width: width * 0.08,
                  height: width * 0.08,

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("./assets/icons/plane.png")}
                  style={{
                    resizeMode: "contain",
                    width: "90%",
                    tintColor: props.focused
                      ? "#6E91BF"
                      : "rgba(255,255,255,0.5)",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
