import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Footer from "./components/Footer";
import AppointmentSection from "./components/AppointmentSection";

function HomePage() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Service />
      <AppointmentSection />
      <Footer />
    </div>
  );
}

export default HomePage;
