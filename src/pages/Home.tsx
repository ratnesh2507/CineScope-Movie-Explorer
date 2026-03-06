import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { useMovies } from "../hooks/useMovies";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, isLoading, isError } = useMovies(query);

  const handleMovieClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="home-page">
      {/* Hero */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="logo-mark">🎬</div>
          <h1 className="hero-title">
            <span>Cine</span>
            <span className="accent">Scope</span>
          </h1>
          <p className="hero-sub">Discover films across every era and genre</p>
          <div className="search-container">
            <SearchBar onSearch={setQuery} />
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="results-section">
        {isLoading && <Loader />}

        {isError && (
          <div className="status-msg error">
            <span>⚠️</span> Something went wrong. Check your API key or try
            again.
          </div>
        )}

        {!isLoading && data && !data.Search && query && (
          <div className="status-msg">
            <span>🔍</span> No results found for "<strong>{query}</strong>"
          </div>
        )}

        {data?.Search && (
          <>
            <div className="results-header">
              <span className="results-count">{data.totalResults} results</span>
              <span className="results-query">for "{query}"</span>
            </div>
            <div className="movies-grid">
              {data.Search.map((movie, i) => (
                <div
                  key={movie.imdbID}
                  className="card-animate"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <MovieCard movie={movie} onClick={handleMovieClick} />
                </div>
              ))}
            </div>
          </>
        )}

        {!query && !isLoading && (
          <div className="empty-state">
            <div className="empty-filmstrip">
              {["🎭", "🏆", "🚀", "💀", "❤️", "😂"].map((e, i) => (
                <span key={i}>{e}</span>
              ))}
            </div>
            <p>Type a title to begin your search</p>
          </div>
        )}
      </main>
    </div>
  );
}
