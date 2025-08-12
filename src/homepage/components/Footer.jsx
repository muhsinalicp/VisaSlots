import React from "react";
import logo from "../../assets/LOGO-W.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="primary-bg py-4 grid md:grid-cols-2 px-2 gap-4 md:gap-10 md:px-10">
        <div className="space-y-1">
          <div className="flex gap-1 items-center">
            <img src={logo} alt="logo" className="size-8" />
            <h1 className="font-bold text-white">Visaslots</h1>
          </div>
          <p className="text-gray-200 font-extralight text-xs">
            Travelo is Southeast Asia’s travel and lifestyle app, we provide you
            with access to discover and purchase different type of travel needs.
          </p>
        </div>

        <div className="grid text-white md:grid-cols-3 gap-2">
          <div>
            <h1 className="font-bold  text-sm">Products</h1>
            <ul className="space-y-2 md:space-y-4 py-2 md:py-4">
              <li className="text-xs">Visaslots</li>
              <li className="text-xs">FAQ</li>
              <li className="text-xs">Blog</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-sm">Company</h1>
            <ul className="space-y-2 md:space-y-4 py-2 md:py-4">
              <li className="text-xs">About us</li>
              <li className="text-xs">Contact us</li>
              <li className="text-xs">For Visa Agencies</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-sm">Resources</h1>
            <ul className="space-y-2 md:space-y-4 py-2 md:py-4">
              <li className="text-xs">Privacy and Policy</li>
              <li className="text-xs">Terms and Conditions</li>
              <li className="text-xs">Cookie Settings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* footer bottom  */}
      <div className="bg-[#0e6b4e] py-2 flex justify-between md:flex-row flex-col gap-1 items-center text-white md:px-12">
        <div className="flex gap-4">
          <div className="outline rounded-full size-6 flex justify-center items-center ">
            <FaFacebookF size={12} />
          </div>
          <div className="outline rounded-full size-6 flex justify-center items-center ">
            <FaInstagram size={12} />
          </div>
          <div className="outline rounded-full size-6 flex justify-center items-center">
            <FaTwitter size={12} />
          </div>
        </div>

        <div className="text-xs flex gap-1 items-center">
          <MdOutlineCopyright /> 2025 Visaslots
        </div>
      </div>
    </footer>
  );
}

export default Footer;
