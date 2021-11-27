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

const Firstflatlist = ({ countries, activeIndex, scrollX, setActiveIndex }) => {
  return (
    <Animated.FlatList
      data={countries}
      keyExtractor={(_, i) => i}
      decelerationRate={"fast"}
      horizontal
      snapToInterval={width / 3}
      bounces={false}
      contentContainerStyle={{
        height: height * 0.15,
        marginBottom: 0,
        marginTop: "6%",
      }}
      onMomentumScrollEnd={(e) => {
        // console.log(e.nativeEvent.contentOffset.x / (width / 3));
        setActiveIndex(e.nativeEvent.contentOffset.x / (width / 3) + 1);
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
          useNativeDriver: false,
          // listener: () =>
          //   setTimeout(() => {
          //     setActiveIndex(Math.floor(scrollX._value / (width / 3) + 1));
          //   }, 500),
        }
      )}
      renderItem={(item) => {
        const inputRange = [
          ((item.index - 2) * width) / 3,
          ((item.index - 1) * width) / 3,
          (item.index * width) / 3,
        ];

        const scaleAnimation = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1.2, 0.7],
        });
        const opacityAnimation = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
        });
        if (item.item.name !== "empty") {
          return (
            <Animated.View
              style={{
                width: width / 3,
                height: height * 0.14,
                justifyContent: "space-around",
                alignItems: "center",
                opacity: opacityAnimation,
                transform: [
                  {
                    scale: scaleAnimation,
                  },
                ],
              }}
            >
              <Image
                source={item.item.image}
                style={{
                  resizeMode: "contain",
                  tintColor: "white",
                  width: "100%",
                  height: "60%",
                  transform: [
                    {
                      scale: 1,
                    },
                  ],
                }}
              />
              <Text
                style={{
                  fontSize: height * 0.02,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {item.item.name}
              </Text>
            </Animated.View>
          );
        } else {
          return (
            <View
              style={{
                width: width / 3,
                height: height * 0.14,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          );
        }
      }}
    />
  );
};

export default Firstflatlist;
