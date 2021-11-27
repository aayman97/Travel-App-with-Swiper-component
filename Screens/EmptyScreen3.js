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

const EmptyScreen3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        EmptyScreen3
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EmptyScreen3;
