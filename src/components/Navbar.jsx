import React from "react";
import csjmu from "../assets/csjmu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <img src={csjmu} alt="" />
      </div>
      <div className="navigations">
        <ul className="flex justify-evenly items-center">
          <li className="border-b-2 border-b-amber-400 rounded-lg">
            <Link to="/" className="text-2xl text-emerald-700 font-semibold">
              Home
            </Link>
          </li>
          <li className="border-b-2 border-b-amber-400 rounded-lg">
            <Link
              to="/about"
              className="text-2xl text-emerald-700 font-semibold"
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-b-amber-400 rounded-lg">
            <Link
              to="/gallery"
              className="text-2xl text-emerald-700 font-semibold"
            >
              Gallery
            </Link>
          </li>
          <li className="border-b-2 border-b-amber-400 rounded-lg">
            <Link
              to="/contact"
              className="text-2xl text-emerald-700 font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
