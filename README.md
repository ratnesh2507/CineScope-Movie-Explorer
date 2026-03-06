# 🎬 CineScope — Movie Explorer

A cinematic movie discovery app built with **React**, **TypeScript**, and **TailwindCSS**. Search for any film, browse results in a responsive grid, and dive into full details — all powered by the OMDb API.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)

---

## ✨ Features

- 🔎 **Live Search** — Instant movie search with debounce-friendly React Query caching
- 🎬 **Movie Cards** — Poster, title, year, and type badge in a responsive grid
- 📄 **Detail Pages** — Full info: plot, cast, director, genre, runtime, awards, and IMDb rating bar
- ⭐ **Ratings** — Visual IMDb rating bar with vote count
- 🌑 **Cinematic Dark Theme** — Gold accents, Playfair Display serif, smooth fade-in animations
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ⚡ **Fully Typed** — End-to-end TypeScript with typed API responses

---

## 🛠 Tech Stack

| Layer         | Technology                            |
| ------------- | ------------------------------------- |
| Framework     | React 18 (Vite)                       |
| Language      | TypeScript                            |
| Styling       | TailwindCSS v4 + Custom CSS           |
| Data Fetching | React Query (`@tanstack/react-query`) |
| HTTP Client   | Axios                                 |
| Routing       | React Router v6                       |
| API           | [OMDb API](https://www.omdbapi.com/)  |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ratnesh2507/CineScope-Movie-Explorer.git
cd CineScope-Movie-Explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and add your OMDb API key:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

> Get a free API key at [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Loader.tsx         # Animated film reel spinner
│   ├── MovieCard.tsx      # Poster card with hover overlay
│   └── SearchBar.tsx      # Search input with clear button
│
├── hooks/
│   ├── useMovies.ts       # React Query hook for search
│   └── useMovieDetails.ts # React Query hook for detail page
│
├── pages/
│   ├── Home.tsx           # Hero + search + results grid
│   └── MovieDetails.tsx   # Full movie info page
│
├── services/
│   └── movieApi.ts        # Axios calls to OMDb API
│
├── types/
│   └── Movie.ts           # TypeScript interfaces
│
├── App.tsx                # Router setup
├── main.tsx               # App entry point + QueryClient
└── index.css              # Design system + cinematic theme
```

---

## 🔌 API Reference

This project uses the **OMDb API** (Open Movie Database).

| Endpoint | Params                 | Description            |
| -------- | ---------------------- | ---------------------- |
| `GET /`  | `s={query}`            | Search movies by title |
| `GET /`  | `i={imdbID}&plot=full` | Get full movie details |

All responses are fully typed via `src/types/Movie.ts`.

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🎨 Design System

The UI uses a custom cinematic design system defined in `index.css`:

| Token          | Value     | Usage           |
| -------------- | --------- | --------------- |
| `--bg`         | `#0d0d0f` | Page background |
| `--surface`    | `#161618` | Card background |
| `--gold`       | `#c9a84c` | Primary accent  |
| `--text`       | `#f0ede8` | Body text       |
| `--text-muted` | `#8a8680` | Secondary text  |

Fonts: **Playfair Display** (headings) + **DM Sans** (body)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📝 License

[MIT](LICENSE)

---

<p align="center">Made with ❤️ by <a href="https://github.com/ratnesh2507">BVK Ratnesh</a></p>
