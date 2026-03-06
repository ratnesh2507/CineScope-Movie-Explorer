import axios from "axios";
import type { SearchResponse, MovieDetail } from "../types/Movie";

const BASE_URL = "/api/movies";

export const searchMovies = async (query: string): Promise<SearchResponse> => {
  const response = await axios.get(BASE_URL, {
    params: { s: query },
  });
  return response.data;
};

export const getMovieDetails = async (imdbID: string): Promise<MovieDetail> => {
  const response = await axios.get(BASE_URL, {
    params: { i: imdbID, plot: "full" },
  });
  return response.data;
};
