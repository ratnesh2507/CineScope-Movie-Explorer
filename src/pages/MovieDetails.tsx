import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useMovieDetails } from "../hooks/useMovieDetails";

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='445' viewBox='0 0 300 445'%3E%3Crect width='300' height='445' fill='%231a1a2e'/%3E%3Ctext x='150' y='222' text-anchor='middle' fill='%23C9A84C' font-size='48'%3E🎬%3C/text%3E%3C/svg%3E";

function RatingBar({ value }: { value: string }) {
  const num = parseFloat(value);
  const pct = isNaN(num) ? 0 : (num / 10) * 100;
  return (
    <div className="rating-bar-wrap">
      <div className="rating-bar-track">
        <div className="rating-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="rating-num">{value}</span>
    </div>
  );
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: movie, isLoading, isError } = useMovieDetails(id ?? "");

  if (isLoading)
    return (
      <div className="details-loader">
        <Loader />
      </div>
    );
  if (isError || !movie)
    return (
      <div className="details-error">
        <p>⚠️ Could not load movie details.</p>
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );

  const poster = movie.Poster !== "N/A" ? movie.Poster : FALLBACK;

  return (
    <div className="details-page">
      <div
        className="details-backdrop"
        style={{ backgroundImage: `url(${poster})` }}
      />
      <div className="details-backdrop-overlay" />

      <div className="details-inner">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </button>

        <div className="details-layout">
          {/* Poster */}
          <div className="details-poster-wrap">
            <img
              src={poster}
              alt={movie.Title}
              className="details-poster"
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK;
              }}
            />
          </div>

          {/* Info */}
          <div className="details-info">
            <div className="details-meta-top">
              <span className="details-type">{movie.Type}</span>
              <span className="details-year">{movie.Year}</span>
              {movie.Rated && movie.Rated !== "N/A" && (
                <span className="details-rated">{movie.Rated}</span>
              )}
              {movie.Runtime && movie.Runtime !== "N/A" && (
                <span className="details-runtime">{movie.Runtime}</span>
              )}
            </div>

            <h1 className="details-title">{movie.Title}</h1>

            {movie.Genre && movie.Genre !== "N/A" && (
              <div className="genre-tags">
                {movie.Genre.split(", ").map((g) => (
                  <span key={g} className="genre-tag">
                    {g}
                  </span>
                ))}
              </div>
            )}

            {movie.Plot && movie.Plot !== "N/A" && (
              <p className="details-plot">{movie.Plot}</p>
            )}

            {/* Ratings */}
            {movie.imdbRating && movie.imdbRating !== "N/A" && (
              <div className="ratings-block">
                <h3 className="block-label">IMDb Rating</h3>
                <RatingBar value={movie.imdbRating} />
                {movie.imdbVotes && movie.imdbVotes !== "N/A" && (
                  <span className="votes-count">{movie.imdbVotes} votes</span>
                )}
              </div>
            )}

            {/* Cast & Crew */}
            <div className="crew-grid">
              {movie.Director && movie.Director !== "N/A" && (
                <div className="crew-item">
                  <span className="crew-label">Director</span>
                  <span className="crew-value">{movie.Director}</span>
                </div>
              )}
              {movie.Writer && movie.Writer !== "N/A" && (
                <div className="crew-item">
                  <span className="crew-label">Writer</span>
                  <span className="crew-value">{movie.Writer}</span>
                </div>
              )}
              {movie.Actors && movie.Actors !== "N/A" && (
                <div className="crew-item crew-full">
                  <span className="crew-label">Cast</span>
                  <span className="crew-value">{movie.Actors}</span>
                </div>
              )}
              {movie.Language && movie.Language !== "N/A" && (
                <div className="crew-item">
                  <span className="crew-label">Language</span>
                  <span className="crew-value">{movie.Language}</span>
                </div>
              )}
              {movie.Country && movie.Country !== "N/A" && (
                <div className="crew-item">
                  <span className="crew-label">Country</span>
                  <span className="crew-value">{movie.Country}</span>
                </div>
              )}
              {movie.Awards && movie.Awards !== "N/A" && (
                <div className="crew-item crew-full awards-item">
                  <span className="crew-label">🏆 Awards</span>
                  <span className="crew-value">{movie.Awards}</span>
                </div>
              )}
            </div>

            <a
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="imdb-link"
            >
              View on IMDb ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
