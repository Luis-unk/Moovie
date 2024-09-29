import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardMovie from '../../components/CardMovie/CardMovie';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons"; // Importando os ícones do Expo
LinearGradient;
import { API_KEY } from "@env"

// n esquecer de botar chave da api aqui
const API_URL = 'https://api.themoviedb.org/3/search/movie';


export default function MovieSearch({navigation}) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);


  // função pra buscar o filme
  const searchMovies = async (text) => {
    setQuery(text);


    if (text.length > 2) {
      try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${text}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    } else {
      setMovies([]);
    }
  };

  return (
    <View style={styles.container}>
        <LinearGradient 
      colors={["#292626", "#1D1C1C"]}
      style={styles.backgroundMoovie}
      >  
      <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar filmes..."
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={(text) => searchMovies(text)}
      />
    </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
            <View style={styles.grid}>
            <CardMovie key={item.id}  movie={item} navigation={navigation}/>
            </View>
        )}
      />
        </LinearGradient>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundMoovie: {
    flex: 1
  },searchContainer: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333", 
    padding: 10,
    borderRadius: 25, 
    marginBottom: 15, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3, 
  },
  searchIcon: {
    marginRight: 10, 
  },
  searchBar: {
    flex: 1, 
    fontSize: 16,
    color: "#fff", 
  },
  movieTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  grid: {

  }
});
	
