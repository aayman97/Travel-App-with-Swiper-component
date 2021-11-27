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
  Easing,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("screen");
const Explore = ({ route, navigation }) => {
  const { item } = route.params;

  const [swipeup, setSwipeUp] = React.useState(new Animated.Value(0));

  const BackButtonArea = ({ navigation }) => {
    return (
      <View style={{ flex: 0.7, width }}>
        <TouchableOpacity
          style={{
            width: width * 0.12,
            height: width * 0.12,
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "100%",
            marginTop: height * 0.05,
            marginLeft: width * 0.05,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/icons/left_arrow.png")}
            style={{ width: "60%", resizeMode: "contain", tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const FlightButton = ({}) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "25%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 20,
          marginTop: "3%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            marginRight: 10,
            fontSize: height * 0.02,
          }}
        >
          Book a flight
        </Text>

        <Image
          source={require("../assets/icons/aeroplane.png")}
          style={{ width: "8%", resizeMode: "contain" }}
        />
      </TouchableOpacity>
    );
  };
  const swipeUpanimation = swipeup.interpolate({
    inputRange: [-80, 0],
    outputRange: [-200, 0],
    extrapolate: "clamp",
  });

  const rotateanimation = swipeup.interpolate({
    inputRange: [-20, 0],
    outputRange: ["180deg", "0deg"],
    extrapolate: "clamp",
  });

  return (
    <ImageBackground source={item.image} style={styles.container}>
      <StatusBar hidden />

      <BackButtonArea navigation={navigation} />

      <Animated.View
        style={{
          flex: 0.4,
          width,

          paddingHorizontal: width * 0.04,
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: swipeUpanimation,
              },
            ],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: height * 0.05,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                height: "100%",
                width: "14%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: height * 0.017,
                  fontWeight: "bold",
                  marginRight: "10%",
                }}
              >
                {item.rate}
              </Text>
              <Image
                source={require("../assets/icons/star.png")}
                style={{
                  resizeMode: "contain",
                  width: "30%",
                  height: "38%",
                }}
              />
            </View>
          </View>

          <Text
            style={{
              color: "white",
              width: "92%",
              marginTop: "5%",
              lineHeight: height * 0.025,
              height: "30%",
            }}
          >
            {item.description}
          </Text>

          <FlightButton />
        </Animated.View>

        <PanGestureHandler
          onGestureEvent={Animated.event(
            [{ nativeEvent: { translationY: swipeup } }],
            {
              useNativeDriver: true,
            }
          )}
        >
          <Animated.View
            style={{
              width: "35%",
              height: "13%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              transform: [
                {
                  translateY: swipeUpanimation,
                },
              ],
            }}
          >
            <Animated.Image
              source={require("../assets/icons/up_arrow.png")}
              style={{
                width: "20%",
                resizeMode: "contain",
                height: "50%",
                tintColor: "rgba(255,255,255,0.5)",
                transform: [
                  {
                    rotate: rotateanimation,
                  },
                ],
              }}
            />
            <Text
              style={{ color: "rgba(255,255,255,0.5)", fontWeight: "bold" }}
            >
              Swipe For Details
            </Text>
          </Animated.View>
        </PanGestureHandler>

        <Animated.View
          style={{
            width: "98%",
            height,
            // backgroundColor: "blue",
            alignSelf: "center",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingVertical: "20%",
            transform: [
              {
                translateY: swipeUpanimation,
              },
            ],
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Number of Hotels : {item.hotels.length}
          </Text>
        </Animated.View>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width,
    height,
  },
});

export default Explore;
