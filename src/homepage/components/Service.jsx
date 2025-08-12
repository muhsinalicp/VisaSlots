import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  FaBell,
  FaCalendar,
  FaClock,
  FaQuoteLeft,
  FaSackDollar,
  FaStar,
} from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoIosHappy, IoMdPersonAdd } from "react-icons/io";
import { MdFamilyRestroom } from "react-icons/md";

const notificationsCard = [
  {
    body: "3-4 times cheaper than Schengen Visa agencies",
    icon: <FaSackDollar />,
  },
  {
    body: "You can book an appointment on the next week",
    icon: <FaCalendar />,
  },
  {
    body: "1 subscription for all travellers",
    icon: <MdFamilyRestroom />,
  },
  {
    body: "1 week - average time for booking an appoinment",
    icon: <FaClock />,
  },
];

const autoBookingCard = [
  {
    body: "Suitable if you can’t respond right away to notifications",
    icon: <FaBell />,
  },
  {
    body: "We book a slot for you, even when you sleep",
    icon: <GiNightSleep />,
  },
  {
    body: "You won’t have to think about booking, we’ll do everything for you ",
    icon: <IoIosHappy />,
  },
  {
    body: "Can Book a slot even for the next day",
    icon: <IoMdPersonAdd />,
  },
];

function Service() {
  return (
    <div className="h-fit p-2  md:px-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 h-full gap-4 md:gap-10  ">
        {/* heading container  */}
        <div className="flex flex-col md:col-span-2  justify-between  h-full ">
          {/* heading and subheading  */}
          <div className="w-full ">
            <h1 className="primary-color font-bold text-4xl">Our Services</h1>
            <p className="text-gray-600  w-full text-sm py-2 ">
              "It is really hard to find a slot on VFS global. With VisaBot I
              have found the slot in 2 days. Thank you so much for such a good
              job!!!"
            </p>
          </div>

          {/* review container  */}
          <div className="hidden md:block">
            <ReviewCard />
          </div>
        </div>

        {/* card container  */}
        <div className="w-full md:col-span-3   flex flex-col md:flex-row gap-8  ">
          {/* notification card  */}
          <div className="w-full outline outline-gray-600 h-full bg-[#f5fffc] rounded-xl p-4 flex flex-col gap-2">
            <h1 className="primary-color text-2xl font-bold">Notifications</h1>

            <div className="text-4xl font-bold primary-color">
              $99
              <span className="text-base font-normal text-gray-600">
                /monthly
              </span>
            </div>

            <p className="text-sm font-normal text-gray-600">
              Best for families and travelers on a budget
            </p>

            <div className="h-full  flex flex-col gap-4 p-2">
              {notificationsCard.map(({ body, icon }, idx) => (
                <div key={idx} className="flex w-full  gap-3 items-center">
                  <div className="bg-[#caded8] shrink-0 size-9 flex items-center justify-center primary-color rounded-full">
                    {icon}
                  </div>
                  <div className="text-xs  text-gray-600">{body}</div>
                </div>
              ))}
            </div>

            <button className="flex justify-center items-center gap-2 w-full  secondary-bg text-white  py-2 rounded-full px-6">
              <span className="font-semibold text-sm ">
                GET APPOINTMENT ALERTS
              </span>
              <BsArrowUpRightCircle size={25} />
            </button>
          </div>

          {/* auto booking card  */}
          <div className="w-full outline outline-gray-600 h-full bg-[#ffffff] rounded-xl  p-4 flex flex-col gap-2">
            <h1 className="secondary-color text-2xl font-bold">Auto Booking</h1>

            <div className="text-4xl font-bold secondary-color">
              $100
              <span className="text-base font-normal text-gray-600">
                /monthly
              </span>
            </div>

            <p className="text-sm font-normal text-gray-600">
              Best for families and travelers on a budget
            </p>

            <div className="h-full  flex flex-col gap-4 p-2">
              {autoBookingCard.map(({ body, icon }, idx) => (
                <div key={idx} className="flex w-full  gap-3 items-center">
                  <div className=" bg-[#faebde] shrink-0 size-9 flex items-center justify-center secondary-color rounded-full">
                    {icon}
                  </div>
                  <div className="text-xs  text-gray-600">{body}</div>
                </div>
              ))}
            </div>

            <button className="flex justify-center items-center gap-2 w-full  secondary-bg text-white  py-2 rounded-full px-6">
              <span className="font-semibold text-sm ">TRY AUTO BOOKING</span>
              <BsArrowUpRightCircle size={25} />
            </button>
          </div>
        </div>

        {/* review container for mobile  */}
        <div className="md:hidden block">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

export default Service;

function ReviewCard() {
  return (
    <div className="primary-color  flex flex-col p-4">
      <FaQuoteLeft size={40} />
      <h4 className="font-bold">Best on the market</h4>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="size-4  primary-bg flex items-center justify-center"
            >
              <FaStar className="" size={10} fill="white" />
            </div>
          ))}
        </div>

        <span className="text-sm font-semibold text-black">2 days ago</span>
      </div>

      <p className="text-sm text-gray-600 py-2 md:w-[75%]">
        It is really hard to find a slot on VFS global. With VisaBot I have
        found the slot in 2 days. Thank you so much for such a good job
      </p>
      <hr className="w-16" />
      <p className="font-bold text-sm py-1">Christy</p>
    </div>
  );
}
