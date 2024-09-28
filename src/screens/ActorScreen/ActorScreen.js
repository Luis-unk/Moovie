import React, { useEffect, useState } from 'react'; 
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const apiKey = "8fc5c85730d3b70ddeb9a3d47b0e5c83";
const imageUrl = "https://image.tmdb.org/t/p/w500";

export default function ActorScreen({ route }) {
  const { actorId } = route.params;
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=pt-BR`
        );
        const data = await response.json();
        setActorDetails(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do ator:', error);
      }
    };

    fetchActorDetails();
  }, [actorId]);

  if (!actorDetails) {
    return <Text style={styles.loadingText}>Carregando...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto do ator */}
      <Image
        source={{ uri: `${imageUrl}${actorDetails.profile_path}` }}
        style={styles.actorImage}
      />
      
      {/* Nome do ator */}
      <Text style={styles.actorName}>{actorDetails.name}</Text>
      
      {/* Detalhes */}
      <View style={styles.actorInfoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Data de Nascimento: </Text>
          {actorDetails.birthday || 'Informação não disponível'}
        </Text>
        
        <Text style={styles.infoText}>
          <Text style={styles.label}>Local de Nascimento: </Text>
          {actorDetails.place_of_birth || 'Informação não disponível'}
        </Text>

        {/* Biografia */}
        <Text style={styles.biographyHeader}>Biografia</Text>
        <Text style={styles.biography}>
          {actorDetails.biography || 'Biografia não disponível.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  actorImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  actorName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  actorInfoContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  infoText: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#fff',
  },
  biographyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginBottom: 10,
  },
  biography: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'justify',
  },
});