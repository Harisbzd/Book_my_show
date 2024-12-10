import SearchBar from "./search_component";

export default function Banner() {
  return (
    <div className="z-0">
      <div className="relative w-full bg-[url('src/shared/assets/8-xmen-movie-poster-design.jpg')] bg-no-repeat bg-cover bg-center" style={{ height: '30rem' }}>
        <div className="h-full bg-gray-600/30">
          <div className="wrapper-container">
            <div className="h-20"></div>
            <div className="text-5xl font-bold text-white fontSize mt-14">Welcome</div>
            <div className="text-2xl font-bold text-white">Millions of movies, TV shows and people to discover. Explore now.</div>
            <div className="mt-14">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}