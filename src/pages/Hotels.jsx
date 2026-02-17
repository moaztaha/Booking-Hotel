import React, { useState } from "react";
import allrooms1 from "../../src/assets/allrooms_1.jpg";
import allrooms2 from "../../src/assets/allrooms_2.jpg";
import allrooms3 from "../../src/assets/allrooms_3.jpg";
import allrooms4 from "../../src/assets/allrooms_4.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Hotels() {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const CheckBox = ({ label, selected = false, onChange }) => {
    return (
      <label className="flex items-center gap-3 text-sm cursor-pointer mt-2 group">
        <input
          type="checkbox"
          className="w-4 h-4 rounded text-[#5F6FFF] focus:ring-[#5F6FFF]"
          checked={selected}
          onChange={(e) => onChange(label, e.target.checked)}
        />
        <span
          className={`select-none ${selected ? "text-black font-medium" : "text-gray-500"}`}>
          {label}
        </span>
      </label>
    );
  };

  const RadioButton = ({ label, name, selected = false, onChange }) => {
    return (
      <label className="flex items-center gap-3 text-sm cursor-pointer mt-2 group">
        <input
          type="radio"
          name={name}
          className="w-4 h-4 text-[#5F6FFF] focus:ring-[#5F6FFF]"
          checked={selected}
          onChange={() => onChange(label)}
        />
        <span
          className={`select-none ${selected ? "text-black font-medium" : "text-gray-500"}`}>
          {label}
        </span>
      </label>
    );
  };
  const roomFilter = [
    "Single Rooms",
    "Double Room",
    "Swimming Pool",
    "Family suits",
  ];

  const priceFilter = ["0-500", "500-1000", "1000-2000", "2000-3000"];

  const SortOption = ["Price Hiegh To Low", "Price Low To Hiegh", "Newest"];

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
      isAvailable: false,
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
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between pt-50 px-35 items-start">
      <div>
        <div className="flex flex-col items-center ">
          <h2 className="text-[#e89755] font-semibold text-4xl md:text-2xl">
            Hotel Rooms
          </h2>
          <p className="text-gray-500 text-sm md:text-base text-center max-w-170 mt-2">
            Discoverd comfortable and stylesh rooms tailord for every
            traverllers needs - from sozy singels to luxurious suites
          </p>
        </div>

        {roomsData.map((room, index) => (
          <div
            key={index}
            className="flex items-center flex-col lg:flex-row  gap-6  mt-10 border-b border-gray-300 pb-10 ">
            <img
              onClick={() => navigate(`/rooms/${room._id}`)}
              className="max-h-65 max-w-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer "
              src={room.images}
              alt={room.hotel}
            />

            <div className="flex flex-col gap-2">
              <p className="text-[#e89755] text-xl font-semibold ">
                {room.hotel}
              </p>
              <p className="text-gray-800 font-semibold  ">{room.city}</p>

              <div className="flex items-center text-[#e89755]">
                {Array.from({ length: room.rating }).map((_, i) => (
                  <FaStar />
                ))}
              </div>

              <div className="flex items-center gap-3 my-1 ">
                <FaLocationArrow className="text-gray-700" />
                <p className="text-gray-500">{room.address}</p>
              </div>

              <div>
                {room.amenities.map((items, index) => (
                  <small className="bg-gray-200 text-gray-800 font-medium p-2 rounded mr-3 ">
                    {items}
                  </small>
                ))}
              </div>
              <p className="text-[#e89755] font-bold mt-3 ">
                ${room.pricePerNight}/Night
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-80 border border-gray-300 text-gray-600">
        <div
          className={`flex items-center justify-between p-4   border-gray-300 ${openFilter && "border-b"}`}>
          <p className="cursor-pointer">Filters</p>

          <div className="cursor-pointer">
            <span
              onClick={() => setOpenFilter(!openFilter)}
              className="lg:hidden">
              {openFilter === true ? "Hide" : "Show"}
            </span>
            <span className="lg:block hidden">Clear</span>
          </div>
        </div>

        <div
          className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-500`}>
          <div className="mb-8 p-4">
            <p className="font-semibold text-gray-700 mb-4 text-sm uppercase">
              Popular Filters
            </p>
            {roomFilter.map((room, index) => (
              <CheckBox label={room} key={index} />
            ))}
          </div>

          <div className="mb-8 p-4">
            <p className="font-semibold text-gray-700 mb-4 text-sm uppercase">
              Popular Filters
            </p>
            {priceFilter.map((price, index) => (
              <CheckBox label={price} key={index} />
            ))}
          </div>

          <div className="mb-8 p-4">
            <p className="font-semibold text-gray-700 mb-4 text-sm uppercase">
              Popular Filters
            </p>
            {SortOption.map((sort, index) => (
              <RadioButton label={sort} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
