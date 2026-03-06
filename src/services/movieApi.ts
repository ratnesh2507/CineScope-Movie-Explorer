import axios from "axios";
import type { SearchResponse } from "../types/Movie";

const API_KEY = import.meta.env.API_KEY;
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
