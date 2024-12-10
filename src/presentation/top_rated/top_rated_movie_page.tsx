import { useEffect, useState } from "react";
import MovieCard from "../components/movie-card";
import MovieList from "../components/movie_list_all";
import { fetchTopRatedMovies } from "../repository/fetch_data";
import { Movie } from "../types/Movies"



export default function TopratedMovies() {
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movies = await fetchTopRatedMovies();
                setTopRatedMovies(movies);
            } catch (error) {
                console.error("Error loading movies:", error);
            }
        };
        loadMovies();
    }, []);

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
        <div>
            <div className="wrapper-container">
                <h2 className="py-8 font-sans text-2xl font-semibold text-black">Top-Rated Movies</h2>
                <div className="flex h-full space-x-7">
                    <MovieList<Movie>
                        datalist={topRatedMovies}
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
        </div>
    );
}