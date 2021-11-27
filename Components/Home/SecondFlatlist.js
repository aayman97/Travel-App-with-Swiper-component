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

const { height, width } = Dimensions.get("screen");

const SecondFlatlist = ({
  fadeAnim,
  activeIndex,
  scrollXSecondFlatlist,
  navigation,
  countries,
}) => {
  return (
    <Animated.View
      style={{
        height: height * 0.58,
        opacity: fadeAnim,
        bottom: height * 0.02,
      }}
    >
      <Animated.FlatList
        data={countries[activeIndex].places}
        keyExtractor={(_, i) => i}
        horizontal
        snapToInterval={width}
        decelerationRate={"fast"}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollXSecondFlatlist } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const scaleAnimation = scrollXSecondFlatlist.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
          });

          const positionAnimation = scrollXSecondFlatlist.interpolate({
            inputRange,
            outputRange: [width * 0.35, 0, -width * 0.35],
          });
          return (
            <Animated.View
              style={{
                width: width,
                height: "100%",
                backgroundColor: "transparent",
                justifyContent: "flex-start",
                alignItems: "center",

                right: positionAnimation,
                transform: [
                  {
                    scale: scaleAnimation,
                  },
                ],
              }}
            >
              <Animated.Image
                source={item.image}
                style={{
                  width: "70%",
                  height: "90%",
                  borderRadius: 30,
                }}
              />
              <View style={{ position: "absolute", width: "60%", top: "49%" }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: height * 0.035,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: height * 0.015,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 10,
                    height: height * 0.12,
                  }}
                >
                  {item.description}
                </Text>

                <TouchableOpacity
                  style={{
                    width: "50%",
                    height: "35%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: "10%",
                  }}
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate("Explore", {
                      item: item,
                    });
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: height * 0.02 }}>
                    Explore
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          );
        }}
      />
    </Animated.View>
  );
};

export default SecondFlatlist;
