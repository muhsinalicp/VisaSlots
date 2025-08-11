import React from "react";
import heroimage from "../../assets/HeroSection.png";
import { BsMagic } from "react-icons/bs";

function Hero() {
  return (
    <div className="w-screen md:h-screen">
      <div className="flex flex-col-reverse md:flex-row h-full w-full ">
        {/* appointment section  */}
        <div className="w-full flex justify-center flex-col gap-1 p-2 px-2 md:px-8">
          <div className="bg-[#faebde] rounded-full  w-fit p-2 px-4 flex gap-2 secondary-color font-bold text-lg md:text-xl">
            <BsMagic />
            <span>AI-Powered • Instant Results</span>
          </div>

          <div className="primary-color text-3xl md:text-5xl font-bold leading-tight">
            Book a Schengen Visa Appointment in{" "}
            <span className="secondary-color">1 week</span>
          </div>

          <div className="text-gray-600 text-sm md:text-lg">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </div>

          <div className="py-2 space-y-3 px-2">
            <div className="flex gap-4 md:h-14">
              <input
                type="text"
                className="bg-white  w-[60%] p-3 px-5 placeholder:text-xs md:placeholder:text-base rounded-full focus:outline-none placeholder:font-medium "
                placeholder="Going to"
              />
              <select
                name="visa-type"
                id=""
                className="rounded-full w-[40%] p-3 px-5 focus:outline-none font-medium text-xs md:text-base text-gray-500 bg-white  "
              >
                <option value="">Visa Type</option>
              </select>
            </div>

            <div className="w-full flex gap-2 md:h-14">
              <input
                type="text"
                className="bg-white w-full p-3 px-5 rounded-full focus:outline-none placeholder:text-xs md:placeholder:text-base placeholder:font-medium "
                placeholder="Select an application "
              />
              <input
                type="text"
                className="bg-white w-full p-3 px-5 rounded-full placeholder:text-xs md:placeholder:text-base focus:outline-none placeholder:font-medium "
                placeholder="Select an application city"
              />
            </div>
          </div>

          <button className="w-full p-4 secondary-bg rounded-full text-lg md:text-xl font-medium text-white">
            Find Appointments
          </button>
        </div>

        {/* image section  */}
        <div className="w-full h-full mt-14 md:mt-0 overflow-hidden">
          <img
            src={heroimage}
            alt="Hero Image"
            className=" h-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
