import React from "react";
import mockup from "../../assets/Mockup.png";
import mapImg1 from "../../assets/Map01.png";
import mapImg2 from "../../assets/Map02.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

const cardItems = [
  {
    count: "1500+",
    desc: "Routes",
  },
  {
    count: "50+",
    desc: "Cities",
  },
  {
    count: "50+",
    desc: "Premium Airlines",
  },
  {
    count: "12k +",
    desc: "Happy Customers",
  },
];

function AppointmentSection() {
  return (
    <div className="py-10 ">
      <div className="primary-bg py-2 grid md:grid-cols-2 ">
        <div
          className="bg-no-repeat bg-cover px-2 flex items-center justify-center"
          style={{ backgroundImage: `url(${mapImg1})` }}
        >
          <img src={mockup} className="md:h-[80%]" alt="iphone image" />
        </div>

        <div
          className="bg-no-repeat bg-cover py-2 md:pr-8  md:py-10"
          style={{ backgroundImage: `url(${mapImg2})` }}
        >
          <div className="h-full  flex flex-col justify-center px-6">
            <div className=" text-white space-y-2  h-fit py-6">
              <h1 className="text-2xl font-bold ">Get your appointment</h1>
              <h2 className="text-sm">
                Get instant email or push notifications when new appointments
                open up or get a slot auto - booked for you
              </h2>
              <button className="flex items-center gap-2  h-fit secondary-bg text-white  py-3 rounded-full px-4">
                <span className="font-semibold ">TRY VISABOT</span>
                <BsArrowUpRightCircle size={30} />
              </button>
            </div>
            <div className="h-fit grid grid-cols-2 gap-2">
              {cardItems.map(({ count, desc }, idx) => (
                <div
                  key={idx}
                  className="bg-white h-fit py-2 md:py-6 rounded-lg flex flex-col items-center justify-center"
                >
                  <h1 className="primary-color font-bold text-3xl">{count}</h1>
                  <p className="text-xs text-gray-600 font-medium">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSection;
