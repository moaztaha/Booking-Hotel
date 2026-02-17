import React from "react";
import offer1 from "../../src/assets/offer_1.jpg";
import offer2 from "../../src/assets/offer_2.jpg";
import offer3 from "../../src/assets/offer_3.jpg";
import offer4 from "../../src/assets/offer_4.jpg";
function SpeicalOffers() {
  const offers = [
    {
      title: "Family Fun Package",
      description: "Enjoy theme park tickets and family-frindlly omenitties",
      valid: "Valid until Sep 10",
      offer: "save 30% today",
      image: offer1,
    },
    {
      title: "Advance Luxury Saver",
      description:
        "Reserve two month early and enjoy discounts at top-class hotels globally",
      valid: "Valid until Oct 7",
      offer: "save 20% today",
      image: offer2,
    },
    {
      title: "Couple's Speical",
      description: "Relaxing  package with spa services for three month",
      valid: "Valid until Dec 20",
      offer: "save 25% today",
      image: offer3,
    },
    {
      title: "Sunny Escape Deal",
      description: "Get a free night stay and morning meal included",
      valid: "Valid until Aug 31",
      offer: "save 35% today",
      image: offer4,
    },
  ];
  return (
    <section className="py-12 px-6 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-gray-800 text-3xl font-bold text-center mb-2">
          Special Offers
        </h2>
        <p className="text-gray-500 ">
          Discover limited-time deals to save more on your next trip.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 ">
            <img
              className="w-full h-48 object-cover"
              src={offer.image}
              alt={offer.name}
            />
            <div className="p-4 text-center">
              <div className="flex items-center   flex-col ">
                <h3 className="text-lg font-semibold mt-1 text-[#e89755]">
                  {offer.title}
                </h3>
                <p className="text-gray-800 text-sm  my-3">
                  {offer.description}
                </p>
                <p className="text-gray-500 text-lg mb-4">{offer.valid}</p>
              </div>

              <div className="flex items-center justify-between       ">
                <p className="text-bold text-lg">{offer.offer}</p>
                <button>View Offer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpeicalOffers;
