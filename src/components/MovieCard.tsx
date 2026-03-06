import type { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <div className="bg-white rounded shadow p-3">
      <img src={movie.Poster} alt={movie.Title} />
      <h3 className="font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
