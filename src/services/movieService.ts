import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
  page: number;
}

axios.defaults.baseURL = "https://api.themoviedb.org/3";


export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMoviesResponse> => {

  const response = await axios.get<FetchMoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
 
       accept: "application/json",
    },
  });

  return response.data;
};