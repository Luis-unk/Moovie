// #import React, { useEffect, useState } from "react";
// import { fetchPopularActors } from "../services/tmdbService"; // Ajuste o caminho conforme necessário

// const PopularActors = () => {
//   const [actors, setActors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadActors = async () => {
//       try {
//         const data = await fetchPopularActors();
//         setActors(data.results); // A lista de atores está dentro do `results`
//       } catch (error) {
//         setError("Erro ao buscar atores populares.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadActors();
//   }, []);

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Atores Populares</h2>
//       <ul>
//         {actors.map((actor) => (
//           <li key={actor.id}>
//             <h3>{actor.name}</h3>
//             <p>{actor.known_for_department}</p>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//               alt={actor.name}
//               style={{ width: "100px", borderRadius: "5px" }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// #
