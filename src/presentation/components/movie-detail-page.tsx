import { useParams } from "react-router-dom";
import { fetchMovieActor, fetchMovieDetails, fetchTrendingMovie } from "../repository/fetch_data";
import { Actor } from "../types/Actor";
import ActorCard from "./actor-card";
import ActorList from "./actor-list-all";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movies";
import MovieBanner from "./movie-banner";
import MovieListHomepage from "./movie-list-homepage";
import MovieCard from "./movie-card";



export default function MovieDetailPage() {
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [movieActor, setMovieActor] = useState<Actor[]>([]);


    useEffect(() => {
        const loadMovieDetails = async () => {
            if (!id) return;
            try {
                const movieData = await fetchMovieDetails(Number(id));
                setMovie(movieData);
            } catch (error) {
                console.error("Error loading movie details:", error);
            }
        };
        loadMovieDetails();
    }, [id]);

    useEffect(() => {
        const loadActors = async () => {
            if (!id) return;
            try {
                const actors = await fetchMovieActor(Number(id));
                setMovieActor(actors);
            } catch (error) {
                console.error("Error loading actors:", error);
            }
        };
        loadActors();
    }, [id]);

    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

   

    useEffect(() => {
        const loadTrendingMovies = async () => {
            try {
                const movies = await fetchTrendingMovie();
                setTrendingMovies(movies);
            } catch (error) {
                console.error("Error loading movie details:", error);
            }
        };

        loadTrendingMovies();
    }, []);

    return (
        <div>
            {movie && (
                <MovieBanner
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                    poster_path={`${IMG_BASE_URL}${movie.poster_path}`}
                    backdrop_path={`${IMG_BASE_URL}${movie.backdrop_path}`}
                    original_title={movie.original_title}
                    overview={movie.overview}
                    genres={movie.genres}
                    origin_country={movie.origin_country}
                    runtime={movie.runtime}
                    tagline={movie.tagline}
                />
            )}

            <div className="px-4 py-6 wrapper-container">
                <h2 className="mb-4 text-2xl font-bold">Cast</h2>
                <ActorList
                    datalist={movieActor}
                    builder={(actor) => (
                        <ActorCard
                            name={actor.name}
                            moviename={actor.character}
                            imgUrl={`${IMG_BASE_URL}${actor.profile_path}`}
                            path=""
                        />
                    )}
                />
            </div>
            <div className="mt-3 mb-3 text-2xl font-bold text-black wrapper-container">Recomended Movies</div>
            <div className="flex overflow-x-auto wrapper-container" style={{ whiteSpace: "nowrap" }}>
                
                <MovieListHomepage<Movie>
                    datalist={trendingMovies}
                    builder={(movie) => (
                        <MovieCard
                            name={movie.title}
                            date={movie.release_date}
                            rating={movie.vote_average}
                            imgUrl={`${IMG_BASE_URL}${movie.poster_path}`}
                            path={`/movie-detail/${movie.id}`}
                        />
                    )}
                />
            </div>
        </div>
    );
}