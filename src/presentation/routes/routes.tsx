import { RouteObject } from "react-router-dom";
import App from "../app.js";
import HomePage from "../home/home_page.js";
import PopularMoviePage from "../popular_movies/popular_movies_page.js";

import TopratedMovies from "../top_rated/top_rated_movie_page.js";
import ErrorPage from "../../error_page.js";
import NowPlayingMovies from "../nowplaying_movies/nowplaying-movies.js";
import MovieDetailPage from "../components/movie-detail-page.js";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />

            },
            {
                path :"nowplaying-movies",
                element : <NowPlayingMovies/>

            },

            {
                path: "popular-movies",
                element: <PopularMoviePage />,
            },

            {
                path: "top-rated-movies",
                element: <TopratedMovies />,
            },

            {
                path : 'movie-detail/:id',
                element : <MovieDetailPage/>
            }
         


        ],
    },
];

export default routes;
