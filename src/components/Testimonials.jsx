import React from "react";

import profile1 from "../../src/assets/testimonial_1.jpg";
import profile2 from "../../src/assets/testimonial_2.png";
import profile3 from "../../src/assets/testimonial_3.jpg";
import { FaStar } from "react-icons/fa6";

function Testimonials() {
  const testimoials = [
    {
      name: "Alex Rodriguez",
      city: "Madrid,Span",
      description:
        "I've tried different hotel apps, but none matched the personal touch and attention to detail this service offers. Their handpicked hotel list is truly exceptional.",
      image: profile1,
      rating: 5,
    },
    {
      name: "Liam Johnson",
      city: "New Yourk,USA",
      description:
        "Everything went beyond my expectations. Booking was smooth, and the quality of the hotels was outstanding. Definitely recommending it!",
      image: profile2,
      rating: 4,
    },
    {
      name: "Sophia lee ",
      city: "Seoul, south korea",
      description:
        "Fast and easy reservations, great customer service, and beautiful hotel choices. Will book again for sure!",
      image: profile3,
      rating: 5,
    },
  ];
  return (
    <div className="py-12 px-6 mt-10 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-[#e89755] text-3xl font-bold text-center mb-2">
          What Our Guests Say
        </h2>
        <p className="text-gray-500 ">
          Real experiance feom real travelers. Discover why people bookin with
          us.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimoials.map((i, index) => (
            <div
              key={index}
              className="bg-white w-100 p-5 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <img
                  className="w-15 h-15 object-cover rounded-full"
                  src={i.image}
                  alt={i.name}
                />
                <div>
                  <p className="text-[#e89755] text-lg ">{i.name}</p>
                  <p className="text-gray-500 text-md">{i.city}</p>
                </div>
              </div>
              <div className="flex items-center mb-3 text-[#e89755]">
                {Array.from({ length: i.rating }).map((_, i) => (
                  <FaStar />
                ))}
              </div>
              <p className="text-gray-800">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
