"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full flex justify-between border border-x-0 fixed top-0 z-10 border-t-0 ${
          scrollY > 0 ? "border-b-gray-800" : "border-b-0"
        } text-lg pb-3 pt-4 px-4 sm:px-6 bg-black text-white`}
      >
        <div className="nav-left-items flex gap-14">
          <Link href="/" className="logo flex ">
            <Image
              className="h-14 w-14"
              src="/navbar-logo.PNG"
              alt="Navbar Logo"
              width={50} // Adjust width as needed
              height={17} // Adjust height as needed
            />
            <p className="py-3 font-semibold">ASCADE</p>
          </Link>
          <div className="nav-links text-gray-400  font-semibold p-3 hidden lg:flex gap-6">
            <Link href="/" className="hover:text-white">
              Products
            </Link>
            <Link href="/" className="hover:text-white">
              About
            </Link>
          </div>
        </div>
        <div className="nav-right-items py-3 flex gap-5">
          <Link
            href="/Seller/login"
            type="button"
            className="text-white hidden lg:block bg-black hover:bg-slate-900 border border-gray-700   font-medium rounded-lg text-sm px-4 py-2  "
          >
            Log In
          </Link>
          <Link
            href="/"
            type="button"
            className="text-white hidden lg:block bg-black hover:bg-slate-900 border border-gray-700   font-medium rounded-lg text-sm px-4 py-2  "
          >
            Contact
          </Link>
          <Link
            href="/Seller/signup"
            type="button"
            className="text-black hidden lg:block bg-white hover:bg-slate-300 border border-black   font-medium rounded-lg text-sm px-4 py-2 f "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
