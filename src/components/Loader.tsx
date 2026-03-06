export default function Loader() {
  return (
    <div className="loader-container">
      <div className="film-reel">
        <div className="reel-ring">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="reel-hole"
              style={{ "--i": i } as React.CSSProperties}
            />
          ))}
          <div className="reel-center" />
        </div>
      </div>
      <p className="loader-text">Loading films…</p>
    </div>
  );
}
