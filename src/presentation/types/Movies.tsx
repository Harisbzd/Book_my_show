export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    original_title: string;
    overview: string;
    genres: Genre[]; // Array of genre objects
    origin_country: string[]; // Array of country strings
    runtime : string
    tagline : string
  }