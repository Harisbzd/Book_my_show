import { useState } from "react";
import FiltersToggle from "../components/filter-switch";
import MovieCard from "../components/movie-card";
import HorizontalList from "../components/horizontal-list";

enum TrendingFilters {
    today = 'today',
    thisWeek = 'this_week'
};

function getFilterName(filter: TrendingFilters) {
    switch (filter) {
        case TrendingFilters.today:
            return 'Today';
        case TrendingFilters.thisWeek:
            return 'This Week';
    }
}

function TrendingMoviesList() {
    const [selectedFilter, setFilter] = useState<TrendingFilters>(TrendingFilters.today);
    const movie = {
        image: 'https://cdn.kinocheck.com/i/atllk7zh1h.jpg',
        rating: 82,
        title: 'Moana 2',
        releaseDate: '2023-07-16',
    };
    return (
        <div className="pt-10 space-y-5 wrapper-container">
            <FiltersToggle<TrendingFilters> props={
                {
                    title: 'Trending',
                    selected: (e) => selectedFilter === e,
                    name: (e) => getFilterName(e),
                    filters: Object.values(TrendingFilters),
                    onClick: (e) => {
                        setFilter(e);
                    }
                }
            } />
            <HorizontalList<number> dataList={[1, 2, 3, 4, 5, 6, 8, 9, 10]} builder={(e) =>
                <MovieCard
                    key={`${e}`}
                    name={movie.title}  // Map title to name
                    date={movie.releaseDate}  // Map releaseDate to date
                    rating={movie.rating}
                    imgUrl={movie.image}  // Map image to imgUrl
                    path={`/movies/${e}`}  // Example route path (adjust according to your routing setup)
                />
            } />
        </div>
    );
}

export default TrendingMoviesList;