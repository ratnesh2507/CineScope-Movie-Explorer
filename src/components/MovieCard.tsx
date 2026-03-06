import type { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
  onClick: (id: string) => void;
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='445' viewBox='0 0 300 445'%3E%3Crect width='300' height='445' fill='%231a1a2e'/%3E%3Ctext x='150' y='222' text-anchor='middle' fill='%23C9A84C' font-size='48'%3E🎬%3C/text%3E%3C/svg%3E";

export default function MovieCard({ movie, onClick }: Props) {
  const poster = movie.Poster !== "N/A" ? movie.Poster : FALLBACK;

  return (
    <div className="movie-card" onClick={() => onClick(movie.imdbID)}>
      <div className="movie-card-inner">
        <div className="poster-wrap">
          <img
            src={poster}
            alt={movie.Title}
            className="poster-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK;
            }}
          />
          <div className="poster-overlay">
            <span className="view-label">View Details</span>
          </div>
          <div className="type-badge">{movie.Type}</div>
        </div>
        <div className="card-info">
          <h3 className="card-title">{movie.Title}</h3>
          <span className="card-year">{movie.Year}</span>
        </div>
      </div>
    </div>
  );
}
