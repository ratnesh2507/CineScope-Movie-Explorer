import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";

export default function Home() {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useMovies(query);

  return (
    <div className="p-6">
      <SearchBar onSearch={setQuery} />

      {isLoading && <p>Loading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {data?.Search?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
