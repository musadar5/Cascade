import React from "react";
import WebsiteNavbar1 from "./WebsiteNavbar1";
import WebsiteNavbar2 from "./WebsiteNavbar2";
import Link from "next/link";

const WebsiteCoverandNavbar = ({ navbar, where }) => {
  return (
    // <div className="w-full h-screen bg-[url('/displaypic2.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-full h-screen bg-[url('/bgpic.jpg')] bg-cover bg-no-repeat bg-center">
      {/* <WebsiteNavbar2 where={0} /> */}
      {navbar === "1" ? (
        <WebsiteNavbar1 where={where} />
      ) : (
        <WebsiteNavbar2 where={where} />
      )}
      <div className="h-screen w-full flex items-end justify-center ">
        <Link href={""}  className="bg-white md:mb-24 mb-56 px-4 py-3 border-2 border-black rounded-3xl  space-mono-regular">Shop All</Link>
      </div>
    </div>
  );
};

export default WebsiteCoverandNavbar;
