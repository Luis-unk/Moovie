import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
LinearGradient;
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import CardMovie from "../../components/CardMovie/CardMovie";



export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  const getTopRated = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83')  
    const data = await res.json()
    console.log(data.results)

    setMovies(data.results)
  }

  useEffect(()=>{
    getTopRated()
  }, [])

  return (
    <ScrollView>   
    <View style={styles.backgroundMoovie}>
      <LinearGradient 
            colors={["#292626", "#1D1C1C"]} style={styles.backgroundMoovie}>   
      <View style={styles.carouselContainer}>
        <Image 
        source={require("../../../assets/moovieBanner.png")}
        style={styles.image}/>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchButtonBox}>
          <TouchableOpacity style={styles.buttonSearch}>
            <TextInput
            placeholder="Buscar..."
            style={styles.textSearch}/>
          <AntDesign name="search1" size={18} color="white" />
        </TouchableOpacity></View>
        
      </View>
      <View style={styles.contentContainer}>
      {movies && movies.map((movie)=>(        
          <CardMovie key={movie.id} movie={movie}/>
        ))}
      </View>
      </LinearGradient>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  image: {
    borderRadius: 6,
    width: "100%",  
    height: "100%",
    resizeMode: "cover"
  },
  backgroundMoovie: {
    flex: 1
  },
  carouselContainer: {
    height: 200,
    backgroundColor: "#dddd",
    margin: 20,
    borderRadius: 6,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    height: 70,
    alignItems: "center",
    backgroundColor: "#313131"
  },
  searchButtonBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    border: 6,
    textAlign: "center",
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
    color: "white",
  },
  contentContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "120dvh"
    
  },
  footerStyle: {
    height: "8vh",
    backgroundColor: "blue"
  },
});
