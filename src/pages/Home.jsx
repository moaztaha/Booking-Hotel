import React from "react";
import Hero from "../components/Hero";
import HotelFeatured from "../components/Hotel-Featured";
import SpeicalOffers from "../components/Speical-Offers";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <HotelFeatured />
      <SpeicalOffers/>
      <Testimonials/>
    </>
  );
}

export default Home;
