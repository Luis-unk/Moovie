import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
LinearGradient;
import tmdb from "../../services/tmdbService";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/157336?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83"
        );
        setFilme(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilm();
  }, []);
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
