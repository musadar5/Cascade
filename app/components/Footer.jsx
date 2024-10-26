import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col   ">
      <div className="m-10 flex flex-wrap gap-16 sm:gap-40 lg:gap-72 justify-center py-10 text-lg">
        <div className="navcontainer  flex flex-col gap-3  ">
          <h1 className="font-bold mb-3">Services</h1>
          <Link href="/" className="text-gray-500 hover:text-white">free store</Link>
          <Link href="/" className="text-gray-500 hover:text-white">get qoute</Link>
          <Link href="/" className="text-gray-500 hover:text-white">donate</Link>
        </div>
        <div className="navcontainer  flex flex-col gap-3">
          <h1 className="font-bold mb-3">Company</h1>
          <Link href="/" className="text-gray-500 hover:text-white">about</Link>
          <Link href="/" className="text-gray-500 hover:text-white">blog</Link>
          <Link href="/" className="text-gray-500 hover:text-white">contact us</Link>
        </div>
        <div className="navcontainer  flex flex-col gap-3">
          <h1 className="font-bold mb-3">Social</h1>
          <div className="link flex gap-2">
          <img className="w-5" src="/facebook.svg" alt="facebook" />
            <Link href="/" className="text-gray-500 hover:text-white">Facebook</Link>
            </div>

            <div className="link flex gap-2">
            <img className="w-5" src="/instagram.svg" alt="instagram" />
            <Link href="/" className="text-gray-500 hover:text-white">Instagram</Link>
            </div>

            <div className="link flex gap-2">
            <img  className="w-5" src="/twitter.svg" alt="twitter" />
            <Link href="/" className="text-gray-500 hover:text-white">Twitter</Link>
            </div>

            <div className="link flex gap-2">
                <img className="w-5" src="/github.svg" alt="github" />
            <Link href="/" className="text-gray-500 hover:text-white">Github</Link>
            </div>
          
          
        </div>
      </div>
      <div className="text-center my-5 text-sm">
        &copy; 2024 Cascade. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
