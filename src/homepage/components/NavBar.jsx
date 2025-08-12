import React from "react";
import logo from "../../assets/LOGO.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    name: "OUR SERVICES",
    href: "/",
  },
  {
    name: "HOW TO START",
    href: "/",
  },
  {
    name: "REVIEWS",
    href: "/",
  },
  {
    name: "DOCUMENTS",
    href: "/",
  },
  {
    name: "FAQ",
    href: "/",
  },
];

function NavBar() {
  return (
    <nav className="w-screen">
      {/* mobile view */}
      <div className="block md:hidden py-3 px-3 fixed w-screen">
        <div className="w-full   h-12 flex justify-between items-center bg-white px-3 rounded-full ">
          <div className="flex gap-1 items-center">
            <img src={logo} alt="" />
            <h1 className="primary-color font-bold text-xl">Visaslots</h1>
          </div>

          <div className="flex gap-1 items-center">
            <button className="secondary-bg px-4 py-2 rounded-full text-white flex items-center justify-center gap-2">
              <span className="">TRY VISABOT</span>
            </button>
            <IoMenu size={25} />
          </div>
        </div>
      </div>

      {/* desktop navbar  */}
      <div className="px-10  hidden md:block fixed w-screen">
        <div className=" p-2 flex justify-between items-center h-20">
          {/* logo section  */}
          <div className="flex items-center gap-2 h-full bg-white rounded-full px-6 ">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="primary-color">
              <h1 className="text-3xl font-bold">Visaslots</h1>
            </div>
          </div>

          {/* nav links section  */}
          <div className="flex items-center primary-color gap-6 h-full bg-white rounded-full px-6 ">
            {navLinks.map(({ name }, index) => (
              <div key={index} className="text-sm">
                {name}
              </div>
            ))}
          </div>

          {/* button section  */}
          <button className="flex items-center gap-2  h-full secondary-bg text-white  py-2 rounded-full px-6">
            <span className="font-semibold ">TRY VISABOT</span>
            <BsArrowUpRightCircle size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
