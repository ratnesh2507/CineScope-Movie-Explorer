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

      {/* Footer */}
      <footer className="site-footer">
        <a
          href="https://github.com/ratnesh2507"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          Made by BVK Ratnesh
        </a>
      </footer>
    </div>
  );
}
