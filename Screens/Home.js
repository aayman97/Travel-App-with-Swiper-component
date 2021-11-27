import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { countries } from "../constants/dummy";
import Firstflatlist from "../Components/Home/Firstflatlist";
import SecondFlatlist from "../Components/Home/SecondFlatlist";

const { height, width } = Dimensions.get("screen");

const Header = () => {
  return (
    <View
      style={{
        width,
        height: height * 0.05,
        flexDirection: "row",
        justifyContent: "space-between",

        paddingHorizontal: width * 0.02,
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/side_drawer.png")}
          style={{ tintColor: "white", resizeMode: "contain", height: "50%" }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: height * 0.015,
          fontWeight: "bold",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Asia
      </Text>
      <TouchableOpacity
        style={{
          width: width * 0.08,
          height: width * 0.08,
          borderRadius: "100%",
          backgroundColor: "white",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/male-avatar.jpeg")}
          style={{ resizeMode: "contain", width: "90%", height: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [fadeAnim, setFadeAnim] = React.useState(new Animated.Value(0));

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollXSecondFlatlist = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setFadeAnim(new Animated.Value(0));
    });
  }, [activeIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} backgroundColor="white" style={"auto"} />
      <Header />
      <Firstflatlist
        countries={countries}
        scrollX={scrollX}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <SecondFlatlist
        navigation={navigation}
        fadeAnim={fadeAnim}
        scrollXSecondFlatlist={scrollXSecondFlatlist}
        activeIndex={activeIndex}
        countries={countries}
      />
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

export default Home;
