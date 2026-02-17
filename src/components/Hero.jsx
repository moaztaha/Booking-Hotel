import React from "react";
import hotel3 from "../../src/assets/hotel_3.jpg";

function Hero() {
  const cities = ["Istanbul", "New Yourk", "Oslo", "London", "Beirut"];
  return (
    <div
      className=" relative flex flex-col items-center justify-center p-10 text-white  bg-no-repeat bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${hotel3})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 mt-20 text-center  ">
        <h2 className="text-[#e89755] text-4xl font-semibold mb-4 ">
          Find Your Perfect stay, Anywhere
        </h2>
        <p className="text-lg ">
          Discoverd op rated hotels and Exclusive deals around the world . book
          with ease and start your journey today.
        </p>
        <button className="mt-5">Book Now</button>
      </div>

      <section className="bg-white mt-10 p-6 max-w-xl mx-auto rounded-2xl shadow-lg z-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 ">
          Book your Stay
        </h2>
        <form className="space-y-4">
          <div>
            <label
              for="distination"
              className="block text-md font-medium text-gray-700 ">
              Distination
            </label>
            <input
              list="distination"
              type="text"
              name="distination"
              placeholder="e.g., Istanbul, paris..."
              className="mt-1 w-full text-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <datalist id="distination">
              {cities?.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                for="chek-in"
                className="block text-md font-medium text-gray-700 ">
                Check-in
              </label>
              <input
                type="date"
                name="chek-in"
                id="chek-in"
                className="mt-1 w-full text-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="chek-out"
                className="block text-md font-medium text-gray-700 ">
                Chek-out
              </label>
              <input
                type="date"
                name="chek-out"
                id="chek-out"
                className="mt-1 w-full text-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                for="guests"
                className="block text-md font-medium text-gray-700 ">
                Guests
              </label>
              <input
                type="text"
                name="guests"
                id="guests"
                className="mt-1 w-full text-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="rooms"
                className="block text-md font-medium text-gray-700 ">
                Rooms
              </label>
              <input
                type=""
                name="rooms"
                id="rooms"
                className="mt-1 w-full text-gray-400 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="text-center ">
            <button className="mt-3">Search Hotels</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Hero;
