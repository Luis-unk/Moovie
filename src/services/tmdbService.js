import axios from "axios";

const tmdb = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/157336?api_key=8fc5c85730d3b70ddeb9a3d47b0e5c83",
});

export default tmdb;
