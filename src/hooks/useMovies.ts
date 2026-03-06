import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movieApi";

export const useMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => searchMovies(query),
    enabled: !!query && query.trim().length > 1,
    staleTime: 1000 * 60 * 5,
  });
};
