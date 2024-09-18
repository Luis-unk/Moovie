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

    setMovies(data.results)
  }

  useEffect(()=>{
    getTopRated()
  }, [])

  return (

  <ScrollView style={styles.backgroundMoovie} showsHorizontalScrollIndicator={false}>   
    <View style={styles.backgroundMoovie}>

      <LinearGradient 
      colors={["#292626", "#1D1C1C"]}
      style={styles.backgroundMoovie}
      >  

        <Image 
        source={require("../../../assets/moovieBanner.png")}
        style={styles.image}/>

        <View style={styles.optionsMoovie}>

          <TouchableOpacity >
            <Text style={styles.textOptions}>+Moovie</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textOptions}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textOptions}>Pesquisar</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.searchButtonBox}>
          <TouchableOpacity style={styles.buttonSearch}>
            <TextInput
            placeholder="Buscar..."
            style={styles.textSearch}/>
            <AntDesign name="search1" size={18} color="white" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.contentBox}>
        <Text style={styles.categoryText}>Mais bem avaliados</Text>
          <View style={styles.contentContainer}>
              {movies && movies.map((movie) => (
                  <CardMovie key={movie.id} movie={movie} />
              ))}
          </View>
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
    height: 200,
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
  optionsMoovie: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 40,
    alignItems: "center"
  },
  textOptions: {
    fontSize: 16,
    fontWeight: "350",
    color: "white",
    padding: 5
  },
  searchButtonBox: {
    alignItems: "center",
    width: "100%",
    height: 50,
    justifyContent: "center",
    backgroundColor: "#313131",
    shadowRadius: 10
  },
  buttonSearch:{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 30

  },
  textSearch: {
    color: "white",
  },
  contentBox: {
    flexDirection: "column",
    margin: 5,
    padding: 10
  },
  contentContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "120dvh"
  },
  contentList: {
    height: 80
  },
  categoryText: {
    color: "white",
    fontSize: 18,
    margin: 2
  },
  footerStyle: {
    height: "8vh",
    backgroundColor: "blue"
  },
});
