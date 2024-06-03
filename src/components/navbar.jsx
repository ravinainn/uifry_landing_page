import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-11/12 mx-auto transition duration-300 ease-in-out">
      <div className="container mx-auto px-4 flex justify-between items-center min-h-20 relative">
        <Link to="/" className="flex items-center space-x-1">
          <BsFire className="text-2xl sm:text-5xl text-red-500" />
          <span className="self-center text-4xl sm:text-4xl font-bold whitespace-nowrap">
            uifry
          </span>
        </Link>

        {/* Navbar Links (conditionally rendered for responsiveness) */}
        <div
          className={
            isOpen
              ? "flex flex-col  bg-white justify-center items-center z-10 space-y-2 md:flex-row md:space-y-0 absolute"
              : "hidden  md:flex flex-row space-x-4"
          }
        >
          <Link href="/" className="minih text-red-500">
            Home
          </Link>
          <Link href="/" className="minih hover:text-red-500">
            About Us
          </Link>
          <Link href="/" className="minih hover:text-red-500">
            Pricing
          </Link>
          <Link href="/" className="minih hover:text-red-500">
            Features
          </Link>
        </div>

        {/* Download Button */}
        <button type="button" className="button">
          Download
        </button>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleNav}>
          {isOpen ? <RxCross2 className="z-50" /> : <IoMenu className="z-50" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
