import { useState } from "react";
import { Movie } from "../types/Movies";
import PaymentMethod from "./payment-methord";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieBanner(props: Movie) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const rentMovie = () => {
    setPrice(149);
    setDialogAction("rent");
    setIsDialogOpen(true);
  };

  const buyMovie = () => {
    setPrice(599);
    setDialogAction("buy");
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="relative w-full" style={{ height: "31rem" }}>
      <img
        className="object-cover w-full h-full"
        src={`${IMAGE_BASE_URL}${props.backdrop_path}`}
        alt="Movie Banner"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      <div className="absolute inset-0 flex flex-col md:flex-row wrapper-container">
        <div className="flex items-center justify-center w-full p-2 md:basis-1/4">
          <img
            className="object-contain w-full h-auto max-w-xs"
            style={{ maxHeight: "31rem" }}
            src={props.poster_path}
            alt="Movie Poster"
          />
        </div>

        <div className="w-full h-full p-4 mt-16 overflow-y-auto md:basis-3/4">
          <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
            {props.title} ({new Date(props.release_date).getFullYear()})
          </h1>

          <p className="text-sm text-white md:text-base">
            {new Date(props.release_date).toLocaleDateString("en-GB")} (
            {props.origin_country}) •{" "}
            {props.genres.map((genre) => genre.name).join(", ")}
            <br />
            {props.runtime} minutes
          </p>

          <div className="mt-6 text-white">
            <i className="text-xl">{props.tagline}</i>
            <h2 className="mt-3 mb-2 text-2xl">Overview</h2>
            <p>{props.overview}</p>
          </div>

          <div className="flex mt-6 space-x-4">
            <button
              onClick={rentMovie}
              className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Rent Movie - $149
            </button>
            <button
              onClick={buyMovie}
              className="px-6 py-2 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
            >
              Buy Movie - $599
            </button>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <PaymentMethod
          action={dialogAction}
          posterPath={props.poster_path}
          price={price}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
}