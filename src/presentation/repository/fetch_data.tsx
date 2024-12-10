import axios from "axios";
import { Movie } from "../types/Movies"
import { Actor } from "../types/Actor";

const API_KEY = "93fb6b1b5382e4b96b83d1f9ceb215f7";
const BASE_URL = "https://api.themoviedb.org/3";


export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
};


export const fetchPopularMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
}

export const fetchNowPlaying = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
        return response.data.results;

    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;

    }
}

export const fetchMovieActor = async (id: number): Promise<Actor[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
        return response.data.cast; 
    } catch (error) {
        console.error("Failed to fetch actors:", error);
        throw error;
    }
};

export const fetchMovieDetails = async (id: number): Promise<Movie> => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        return response.data;  
    } catch (error) {
        console.error("Failed to fetch movie details:", error);
        throw error;
    }
};




export const fetchTrendingMovie = async (): Promise<Movie[]> => {
    try {
         const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        return response.data.results;

    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;

    }
}

export const fetchPopularMovie = async (): Promise<Movie[]> => {
    try {
         const response = await axios.get(`${BASE_URL}/trending/movie/popular?api_key=${API_KEY}`);
        return response.data.results;

    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;

    }
}









