import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movieApi";

export const useMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => searchMovies(query),
    enabled: !!query,
  });
};
