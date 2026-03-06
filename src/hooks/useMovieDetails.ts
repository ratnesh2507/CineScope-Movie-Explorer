import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/movieApi";

export const useMovieDetails = (imdbID: string) => {
  return useQuery({
    queryKey: ["movie", imdbID],
    queryFn: () => getMovieDetails(imdbID),
    enabled: !!imdbID,
    staleTime: 1000 * 60 * 10,
  });
};
