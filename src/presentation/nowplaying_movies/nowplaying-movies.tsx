import { useEffect, useState } from "react";
import { Movie } from "../types/Movies";
import MovieCard from "../components/movie-card";
import MovieList from "../components/movie_list_all";
import { fetchNowPlaying } from "../repository/fetch_data";



export default function NowPlayingMovies() {


    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movies = await fetchNowPlaying()
                setNowPlayingMovies(movies)
            } catch (error) {
                console.error("Error loading movies:", error);

            }
        }
        loadMovies()
    }, [])
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";


    return (
        <div>
            <div className="wrapper-container">
                <h2 className="py-8 font-sans text-2xl font-semibold text-black">Now Playing Movies</h2>
                <div className="flex h-full space-x-7">
                    <MovieList<Movie>
                        datalist={nowPlayingMovies}
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
    )
}