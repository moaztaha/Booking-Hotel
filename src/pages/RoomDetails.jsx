import React from "react";
import { useParams } from "react-router-dom";
import allrooms1 from "../../src/assets/allrooms_1.jpg";
import allrooms2 from "../../src/assets/allrooms_2.jpg";
import allrooms3 from "../../src/assets/allrooms_3.jpg";
import allrooms4 from "../../src/assets/allrooms_4.jpg";

function HotelDetails() {
  const { id } = useParams();
  const roomsData = [
    {
      _id: "a1f64c7197bc1234abcd9012",
      hotel: "Albine View Lodge",
      city: "USA",
      address: "112 Moutain Ed, Aspen, Colorado, USA",
      roomType: "King Suite",
      pricePerNight: 450,
      amenities: ["Balcony", "Sea View", "High-Speed WiFi"],
      images: allrooms1,
      isAvailable: true,
      rating: 5,
      createdAt: "2025-04-12T09:15:00.000Z",
      updatedAt: "2025-04-12T09:15:00.000Z",
      v: 0,
    },
    {
      _id: "b2e75d8298cd2345bcde0123",
      hotel: "Garden Luxe Hotel",
      city: "Istanbul",
      address: "112 Istanbul Ed, Turkey",
      roomType: "Standard Twin",
      pricePerNight: 280,
      amenities: ["TV", "City View", "Breakfast Included"],
      images: allrooms2,
      isAvailable: true,
      rating: 4,
      createdAt: "2025-04-13T11:30:00.000Z",
      updatedAt: "2025-04-13T11:30:00.000Z",
      v: 0,
    },

    {
      _id: "c3d86e93a9de3456cdef1234",
      hotel: "Urbasstay Central",
      city: "New Yourk",
      address: "210 Lexington Ave, Manhattan, New York, USA",
      roomType: "Luxury Single",
      pricePerNight: 320,
      amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
      images: allrooms3,
      isAvailable: true,
      rating: 5,
      createdAt: "2025-06-22T09:00:00.000Z",
      updatedAt: "2025-04-14T14:45:00.000Z",
      _v: 0,
    },

    {
      _id: "d4f97fa4b0ef4567defa2345",
      hotel: " King Suite",
      city: "China",
      address: "88 loats Lake Rd, Guilin, Guangxi, China",
      roomType: "Deluxe Family Room",
      pricePerNight: 390,
      amenities: ["Mini Bar", "Mountain View", "Free Parking"],
      images: allrooms4,
      isAvailable: true,
      rating: 4,
      createdAt: "2025-06-22T09:00:00.000Z",
      updatedAt: "2025-06-22T09:00:00.000Z",
      v: 0,
    },
  ];
  const hotel = roomsData.find((room) => room._id === id);

  return (
    <div className="max-w-5xl mx-auto px-35 mt-50 ">
      <div className="text-center mb-2">
        <h2 className=" text-gray-800 text-3xl font-semibold">{hotel.hotel}</h2>
        <p className="text-gray-600 font-semibold my-1">{hotel.city}</p>
        <p className="text-gray-600 font-semibold">{hotel.address}</p>
      </div>
      <img
        src={hotel.images}
        alt={hotel.hotel}
        className=" w-full h-96 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 mb-6"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        {/* Right Section */}
        <div className="">
          <h2 className="text-lg font-semibold  ">Room Type</h2>
          <p className="text-gray-500">{hotel.roomType}</p>

          <h2 className="mt-2 text-lg font-semibold ">Amenities</h2>
          <ul className="list-disc list-inside ">
            {hotel.amenities.map((item, index) => (
              <li className="text-gray-500 px-2" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Left Section */}
        <div>
          <div>
            <h2 className="text-lg font-semibold  "> Price Per Night </h2>
            <p className="text-gray-500"> {hotel.pricePerNight} </p>
          </div>

          <div className="my-1">
            <h2 className="text-lg font-semibold ">Rating</h2>
            <p className="text-gray-500">{hotel.rating}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold ">Available</h2>
            <p
              className={`${hotel.isAvailable ? "text-green-500" : "text-red-600"}`}>{`${hotel.isAvailable ? "Avialble" : "Not Avialble"}`}</p>
          </div>
        </div>
      </div>
      <div className="my-15 text-center ">
        <h2 className="text-2xl font-semibold mb-2">Location</h2>
        <iframe
          title="map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`}
          width="100%"
          height="450px"
          className="rounded-md shadow-md border-2 border-[#e89755]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default HotelDetails;
