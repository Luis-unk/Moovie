import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
LinearGradient;
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from "react-native-web";
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
    <LinearGradient 
            colors={["#292626", "#1D1C1C"]} style={styles.backgroundMoovie}>               
    <View>
      <ScrollView>
      <View style={styles.carouselContainer}>
        <Image 
        source={require("../../../assets/moovieBanner.png")}
        style={styles.image}/>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchButtonBox}>
          <TouchableOpacity style={styles.buttonSearch}>
            <TextInput style={styles.textSearch}
            placeholder="Buscar..."/>
          <AntDesign name="search1" size={18} color="white" />
        </TouchableOpacity></View>
        
      </View>
      <View style={styles.contentContainer}>
      {movies && movies.map((m)=>(
          <View key={m.id}>
          <Text style={styles.textSearch}>{m.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footerStyle}>
        <Text>Test 2</Text>
      </View>
      </ScrollView>
    </View>
    
    </LinearGradient>
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
    height: "20dvh",
  },
  footerStyle: {
    height: "20dvh"
  },
});
