import { useEffect, useState } from "react";
import Banner from "./banner_component.tsx";
import { Movie } from "../types/Movies.tsx";
import { fetchTrendingMovie } from "../repository/fetch_data.tsx";
import MovieCard from "../components/movie-card.tsx";
import MovieListHomepage from "../components/movie-list-homepage.tsx";

function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

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
        <>
            <Banner />
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
        </>
    );
}

export default HomePage;