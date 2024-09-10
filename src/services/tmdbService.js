import axios from "axios";

const TMDBUrl = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/157336?",
    searchURL: "https://api.themoviedb.org/3/search/movie?query"
})

export const fetchFilms = async () => {
    response = await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83`)

    return response.data;
}

export const fetchFilmsById = async (movieId) => {
    response = await axios.get(`${TMDBUrl}/${movieId}?api_key=${process.env.API_KEY}`)

    return response.data;
}

export const fetchIdByTitle = async (title) => {
    title = title.replace(/ /g, "+")

    response = await axios.get(`${searchURL}=${title}&${process.env.API_KEY}`)

    return response.data.id;
}

/*
FAZER REQUISIÇÕES USANDO APPEND_TO_RESPONSE -> FAZ DUAS OU MAIS REQUISIÇÕES JUNTAS

exemplo: 
https://api.themoviedb.org/3/movie/157336?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83&append_to_response=videos

https://api.themoviedb.org/3/movie/157336?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83&append_to_response=videos,images

maneira separada: 

https://api.themoviedb.org/3/movie/157336?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83
https://api.themoviedb.org/3/movie/157336/videos?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83

*/