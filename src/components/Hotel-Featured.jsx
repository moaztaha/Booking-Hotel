import React from "react";
import hotel1 from "../../src/assets/hotel_1.jpg";
import hotel2 from "../../src/assets/hotel_2.jpg";
import hotel3 from "../../src/assets/hotel_3.jpg";
import hotel4 from "../../src/assets/hotel_4.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function HotelFeatured() {
  const hotels = [
    {
      name: "Grand Palace Hotel",
      rating: 4.5,
      location: "New Yourk, KSA",
      price: "120$",
      image: hotel1,
    },
    {
      name: "Sunrise Resort",
      rating: 4.5,
      location: "Santorini, Greece",
      price: "180$",
      image: hotel2,
    },
    {
      name: "City Inn",
      rating: 5,
      location: "Tokyo, Japan",
      price: "99$",
      image: hotel3,
    },
    {
      name: "Ocean View",
      rating: 4.7,
      location: "Barclona, Spain",
      price: "150$",
      image: hotel4,
    },
  ];
  return (
    <section className="py-12 px-6 mt-10">
      <h2 className="text-gray-800 text-3xl font-bold text-center mb-8">
        Hotel Featured
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 ">
            <img className="w-full h-48 object-cover" src={hotel.image} alt={hotel.name} />
            <div className="p-4">
              <div className="flex items-center justify-between my-1 ">
                <h3 className="text-lg font-semibold text-[#e89755]">{hotel.name}</h3>
                <span className="flex items-center gap-1">
                  {hotel.rating}
                  <FaStar className="text-[#e89755]" />
                </span>
              </div>
              <p className="flex items-center gap-1 text-gray-500 mb-1">
                <FaLocationDot className="text-[#e89755]" />
                {hotel.location}
              </p>

              <div className="flex items-center justify-between ">
                <p className="text-bold text-lg">{hotel.price}/night</p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelFeatured;
