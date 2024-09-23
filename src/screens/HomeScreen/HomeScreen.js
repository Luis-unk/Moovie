import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from "react-native";
LinearGradient;
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
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
  const searchMovies = async ()=>{
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${queryMovie}&api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83`)
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

          <TouchableOpacity onPress={() => {navigation.navigate("Favoritos")}}>
            <Text style={styles.textOptions}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> {navigation.navigate("Pesquisar")}}>
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
          <View style={styles.contentContainer}>
            <Text style={styles.categoryText}>Mais bem avaliados</Text>
              <FlatList
              data={ratedMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item} navigation={navigation}/></View>)}
              keyExtractor={item => item.id}
              getItemLayout={(data, index) => (
                { length: 300, offset: 310 * index, index }
              )}
              showsHorizontalScrollIndicator={false}
              />
            <Text style={styles.categoryText}>Populares</Text>
              <FlatList
              data={popularMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item}/></View>)}
              keyExtractor={item => item.id}
              getItemLayout={(data, index) => (
                { length: 300, offset: 310 * index, index }
              )}
              showsHorizontalScrollIndicator={false}
              style={styles.carrouselStyle}/>

              <Text style={styles.categoryText}>Assista Agora</Text>
              <FlatList
              data={nowPlayingMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item}/></View>)}
              keyExtractor={item => item.id}
              getItemLayout={(data, index) => (
                { length: 300, offset: 310 * index, index }
              )}
              showsHorizontalScrollIndicator={false}
              style={styles.carrouselStyle}/>

              <Text style={styles.categoryText}>Por Vir</Text>
              <FlatList
              data={upcomingMovies}
              horizontal={true}
              renderItem={({item}) =>  (<View><CardMovie key={item.id}  movie={item}/></View>)}
              keyExtractor={item => item.id}
              getItemLayout={(data, index) => (
                { length: 300, offset: 310 * index, index }
              )}
              showsHorizontalScrollIndicator={false}
              style={styles.carrouselStyle}/>


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
    padding: 10,
  },
  contentContainer: {
    display: "flex",
    height: "auto",
    width: "100%"
  },
  carrouselStyle: {
    height: "auto",
    marginTop: 5
  },
  contentList: {
    height: 80
  },
  categoryText: {
    color: "white",
    fontSize: 18,
    margin: 10,
  },
  footerStyle: {
    height: "8vh",
    backgroundColor: "blue"
  },
});
