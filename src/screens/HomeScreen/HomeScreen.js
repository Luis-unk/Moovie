import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from "react-native";
LinearGradient;
import { useState, useEffect } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";


export default function HomeScreen({ navigation }) {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [queryMovie, setQueryMovie] = useState("");

  const getTopRated = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83')  
    const data = await res.json()

    setRatedMovies(data.results)
  }

  const getPopularMovies = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83')  
    const data = await res.json()

    setPopularMovies(data.results)
  }

  const getNowPlayingMovies = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83')  
    const data = await res.json()

    setNowPlayingMovies(data.results)
  }

  const getUpcomingMovies = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83')  
    const data = await res.json()

    setUpcomingMovies(data.results)
  }

  useEffect(()=>{
    getTopRated()
    getPopularMovies()
    getNowPlayingMovies()
    getUpcomingMovies()
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

          <TouchableOpacity>
            <Text style={styles.textOptions}>+Moovie</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> {navigation.navigate("Pesquisar")}}>
            <Text style={styles.textOptions}>Pesquisar</Text>
          </TouchableOpacity>

        </View>
        
        <View style={styles.contentBox}>
          <View style={styles.contentContainer}>
            
          <View style={styles.flatTittle}>
            <Text style={styles.categoryText}>Mais bem avaliados</Text>
              <FlatList
              data={ratedMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item} navigation={navigation}/></View>)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              />
          </View>

          <View style={styles.flatTittle}>
            <Text style={styles.categoryText}>Populares</Text>
              <FlatList
              data={popularMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item} navigation={navigation}/></View>)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              style={styles.carrouselStyle}/>
          </View>

          <View style={styles.flatTittle}>
              <Text style={styles.categoryText}>Assista Agora</Text>
              <FlatList
              data={nowPlayingMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item} navigation={navigation}/></View>)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              style={styles.carrouselStyle}/>
          </View>  

          <View style={styles.flatTittle}>
              <Text style={styles.categoryText}>Por Vir</Text>
              <FlatList
              data={upcomingMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item} navigation={navigation}/></View>)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              style={styles.carrouselStyle}/>
          </View>

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
    padding: 10,
    justifyContent: "space-evenly",
    height: 50,
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "white",
    borderTopColor: "white"
  },
  textOptions: {
    fontSize: 16,
    fontWeight: "350",
    color: "white",
    padding: 5
  },
  contentBox: {
    flexDirection: "column",
    margin: 5,
    padding: 10,
  },
  contentContainer: {
    display: "flex",
    height: "auto",
    width: "100%"
  },
  carrouselStyle: {
    height: "auto",
    marginTop: 5,
    marginBottom: 5
  },
  contentList: {
    height: 80
  },
  categoryText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  footerStyle: {
    height: "8vh",
    backgroundColor: "blue"
  },
  flatTittle: {
    margin: 10
  }
});
