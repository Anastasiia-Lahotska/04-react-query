import axios from 'axios';
import { type Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWU5ZmU4ODViZjRmM2JlMGE4ZTBhZWQ1YThhNzYwMSIsIm5iZiI6MTc1MzU5MTM4My43OTYsInN1YiI6IjY4ODVhZTU3ZWU0Y2IwMWMzZmQ5YjI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lTh3ruGlNrgY2mewL1Ls7cn0IsqJVGVhRnMf8DUK47I`,
    },
  };

  try {
    const response = await axios.get<FetchMoviesResponse>(
      'https://api.themoviedb.org/3/search/movie',
      config
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; 
  }
}