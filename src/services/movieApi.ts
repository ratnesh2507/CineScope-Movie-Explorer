import axios from "axios";
import type { SearchResponse, MovieDetail } from "../types/Movie";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string): Promise<SearchResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    },
  });
  return response.data;
};

export const getMovieDetails = async (imdbID: string): Promise<MovieDetail> => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: imdbID,
      plot: "full",
    },
  });
  return response.data;
};
