import { useState, useEffect } from "react";
import PayPalPayment from "./pay-with-paypal";
import Checkout from "./pay-with-paypal";

interface PaymentMethodProps {
  action: string;
  posterPath: string;
  price: number;
  onClose: () => void;
}

export default function PaymentMethod({
  action,
  posterPath,
  price,
  onClose,
}: PaymentMethodProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [checkOut, setCheckOut] = useState(false);

  useEffect(() => {
    setCheckOut(false);  // Reset on refresh or remount
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-xl font-semibold">
          {action === "rent" ? "Rent Movie" : "Buy Movie"}
        </h2>

        <img
          className="object-contain w-full h-auto mb-4 rounded-lg"
          src={`${IMAGE_BASE_URL}${posterPath}`}
          alt="Movie Poster"
          style={{ maxHeight: "300px" }}
        />

        <p className="mb-4">
          Are you sure you want to {action} this movie for ${price}?
        </p>
        <div className="">
          <Checkout price={price} onClose={onClose} />
          <button
            onClick={onClose}
            className="w-full px-4 py-2.5 mt-7 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}