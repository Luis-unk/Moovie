import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const imageUrl = "https://image.tmdb.org/t/p/w500/"

export default function CardMovie({movie, navigation}) {
    return( <View key={"movie-card"}>
      <TouchableOpacity onPress={()=>{navigation.navigate(`Filme`, movie)}} 
      style={styles.card}>
        <Image
        source={imageUrl + movie.poster_path}
        alt={movie.title}
        style={styles.imageCard}/>
        <Text style={styles.textCard}>{movie.title}</Text>
        </TouchableOpacity>
        
    </View> )
}

const styles = StyleSheet.create({
    card: {
      flexDirection: "column",
      padding: 5,
      height: "20vh",
      width: "16vh",
      margin: 20
    },
    imageCard: {
      borderRadius: 4,
      width: "100%",  
      height: "100%",
      resizeMode: "cover"
    },
    textCard: {
        marginTop: 6,
        fontSize: 14,
        color: "white",
        textAlign: "center"
    }
})