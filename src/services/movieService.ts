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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWU5ZmU4ODViZjRmM2JlMGE4ZTBhZWQ1YThhNzYwMSIsIm5iZiI6MTc1MzU5MTM4My43OTYsInN1YiI6IjY4ODVhZTU3ZWU0Y2IwMWMzZmQ5YjI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lTh3ruGlNrgY2mewL1Ls7cn0IsqJVGVhRnMf8DUK47I`,
 
       accept: "application/json",
    },
  });

  return response.data;
};