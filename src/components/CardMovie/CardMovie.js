import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

export default function CardMovie(movie) {
    return( <View>
        <Text>{movie.title}</Text>
    </View> )
}