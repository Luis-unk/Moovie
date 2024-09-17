import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

const imageUrl = "https://image.tmdb.org/t/p/w500/"

export default function CardMovie({movie}) {
    return( <View key={"movie-card"} style={styles.card}>
        <Image
        source={imageUrl + movie.poster_path}
        alt={movie.title}
        style={styles.imageCard}/>
        <Text style={styles.textCard}>{movie.title}</Text>
    </View> )
}

const styles = StyleSheet.create({
    card: {
      height: "20dvh",
      width: "12dvh",
      margin: 20
    },
    imageCard: {
      borderRadius: 4,
      width: "100%",  
      height: "100%",
      resizeMode: "cover"
    },
    textCard: {
        fontSize: 12,
        color: "white"
    }
})