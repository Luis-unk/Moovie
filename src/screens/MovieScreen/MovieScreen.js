import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const imageUrl = "https://image.tmdb.org/t/p/w500/";

export default function MovieScreen({ route, navigation }) {
    const [movieDetails, setMovieDetails] = useState(null);
    const movieId = route.params.id; // ID do filme passado como parâmetro
    const apiKey = "8fc5c85730d3b70ddeb9a3d47b0e5c83"; // Sua chave da API

    const fetchMovieDetails = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR&append_to_response=credits`
            );
            const data = await response.json();
            setMovieDetails(data);
        } catch (error) {
            console.error("Erro ao buscar detalhes do filme:", error);
        }
    };

    useEffect(() => {
        fetchMovieDetails(movieId);
    }, [movieId]);

    const formatReleaseDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("pt-BR", options);
    };

    if (!movieDetails) {
        return <Text style={styles.loadingText}>Carregando...</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Poster do Filme */}
            <Image source={{ uri: imageUrl + movieDetails.poster_path }} style={styles.poster} />

            {/* Título, Ano e Data de Lançamento */}
            <Text style={styles.title}>
                {movieDetails.title} ({new Date(movieDetails.release_date).getFullYear()})
            </Text>
            <Text style={styles.releaseDate}>Data de Lançamento: {formatReleaseDate(movieDetails.release_date)}</Text>
            <Text style={styles.rating}>Nota: {movieDetails.vote_average} / 10</Text>

            {/* Sinopse */}
            <View style={styles.sinopseContainer}>
                <Text style={styles.sinopseHeader}>Sinopse</Text>
                <Text style={styles.synopsis}>
                    {movieDetails.overview || "Sinopse não disponível."}
                </Text>
            </View>

            {/* Atores */}
            <View style={styles.actorsContainer}>
                <Text style={styles.actorsHeader}>Atores:</Text>
                {movieDetails.credits && movieDetails.credits.cast.length > 0 ? (
                    movieDetails.credits.cast.slice(0, 10).map((actor) => (
                        <TouchableOpacity 
                            key={actor.id} 
                            onPress={() => navigation.navigate("Actor", { actorId: actor.id })}
                            style={styles.actorCard}
                        >
                            <Image
                                source={{ uri: imageUrl + actor.profile_path }}
                                style={styles.actorImage}
                            />
                            <View style={styles.actorInfo}>
                                <Text style={styles.actorName}>{actor.name}</Text>
                                <Text style={styles.actorCharacter}>{actor.character}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.actor}>Elenco não disponível.</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#1d1d1d",
        padding: 20,
        alignItems: "center",
    },
    loadingText: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
    },
    poster: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#444",
        borderWidth: 2,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    releaseDate: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 10,
    },
    rating: {
        color: "#ffc107",
        fontSize: 18,
        marginBottom: 10,
    },
    sinopseContainer: {
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 8,
        width: "100%",
        marginTop: 10,
    },
    sinopseHeader: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    synopsis: {
        color: "#ccc",
        fontSize: 16,
        textAlign: "justify",
    },
    actorsContainer: {
        backgroundColor: "#444",
        padding: 10,
        borderRadius: 8,
        width: "100%",
        marginTop: 10,
    },
    actorsHeader: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    actorCard: {
        flexDirection: "row",
        backgroundColor: "#555",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    actorImage: {
        width: 75,
        height: 100,
        borderRadius: 5,
        marginRight: 10,
    },
    actorInfo: {
        flex: 1,
    },
    actorName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    actorCharacter: {
        color: "#ccc",
        fontSize: 14,
    },
});