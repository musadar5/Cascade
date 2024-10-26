import React from "react";
import Link from "next/link";
import Image from "next/image";

const SellerNavbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="w-full h-16 border-b border-gray-800 fixed z-30 flex items-center bg-black justify-between px-4 text-white">
      <div className="flex gap-3 md:gap-5 items-center">
        <div className="hamburger text-2xl">
          <button
            onClick={() => {
              showSidebar === true
                ? setShowSidebar(false)
                : setShowSidebar(true);
            }}
          >
            ☰
          </button>
        </div>
        <Link href="/" className="logo flex">
          <Image
            className="md:h-10 md:w-10 h-6 w-6 mt-1.5 md:mt-0.5 "
            src="/navbar-logo.PNG"
            alt="Navbar Logo"
            width={50} // Adjust width as needed
            height={17} // Adjust height as needed
          />
          <p className="pt-2 text-sm md:text-lg font-semibold">ASCADE</p>
        </Link>
      </div>

      <div className="monoton-regular text:md md:text-2xl text-white">
        HELLO
      </div>
    </div>
  );
};

export default SellerNavbar;
