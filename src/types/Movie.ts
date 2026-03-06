export interface Movie {
  imdID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Respone: string;
}
