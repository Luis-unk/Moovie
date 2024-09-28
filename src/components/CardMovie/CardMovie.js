import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const imageUrl = "https://image.tmdb.org/t/p/w500/";

export default function CardMovie({ movie, navigation }) {
  return (
    <View key={"movie-card"}>
      <TouchableOpacity
        onPress={() => navigation.navigate(`Filme`, movie)}
        style={styles.card}
      >
        <Image
          source={{ uri: imageUrl + movie.poster_path }}
          alt={movie.title}
          style={styles.imageCard}
          onError={(error) => console.error("Image loading error:", error)}
        />
        <Text style={styles.textCard}>
          {movie.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8, 
    padding: 10, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4, 
    elevation: 2, 
    flexDirection: "column",
    alignItems: "center", 
  },
  imageCard: {
    borderRadius: 8, 
    width: 120, 
    height: 180, 
    resizeMode: "cover",
  },
  textCard: {
    marginTop: 6,
    fontSize: 16, 
    color: "white", 
    textAlign: "center",
    fontWeight: "bold", 
  },
});