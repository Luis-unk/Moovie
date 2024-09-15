import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
LinearGradient;
import { useState, useEffect } from "react";


export default function HomeScreen({ navigation }) {
  const [movie, setMovie] = useState([]);



  return (
    <View>
      <View style={styles.carouselContainer}></View>
      <View style={styles.searchContainer}>
        <LinearGradient
          colors={["#5D3CF0", "#09071C"]}
          style={styles.backgroundMoovie}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text></Text>
      </View>
      <View style={styles.footerStyle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundMoovie: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "8vh",
  },
  carouselContainer: {
    height: "25vh",
    backgroundColor: "#dddd",
    margin: 20,
    borderRadius: 6,
  },
  searchContainer: {},
  contentContainer: {},
  footerStyle: {},
});
