import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
LinearGradient;
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  const getTopRated = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83')
    
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(()=>{
    getTopRated()
  }, [])

  return (
    <View>

      <LinearGradient 
            colors={["#292626", "#1D1C1C"]}
            style={styles.backgroundMoovie}>                
      </LinearGradient>

      <View style={styles.carouselContainer}></View>
      <View style={styles.searchContainer}>
        <View style={styles.searchButtonBox}>
          <TouchableOpacity style={styles.buttonSearch}>
            <TextInput style={styles.textSearch}
            placeholder="Buscar..."/>
          <AntDesign name="search1" size={18} color="white" />
        </TouchableOpacity></View>
        
      </View>
      <View style={styles.contentContainer}>
        <Text>TESTANDOS</Text>
      </View>
      <View style={styles.footerStyle}>
        <Text>Test 2</Text>
        <Text>{movies.map((m)=>{m.title})}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  backgroundMoovie: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100vh",
  },
  carouselContainer: {
    height: "25vh",
    backgroundColor: "#dddd",
    margin: 20,
    borderRadius: 6,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    height: "8vh",
    alignItems: "center",
    backgroundColor: "#313131"
  },
  searchButtonBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    border: 6,
    textAlign: "center",
    borderBottomWidth: "80%",
  },
  buttonSearch:{
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    width: "70%",
    justifyContent: "space-around",
  },
  textSearch: {
    color: "white"
  },
  contentContainer: {
    height: "20vh",
  },
  footerStyle: {
    height: "20vh"
  },
});
