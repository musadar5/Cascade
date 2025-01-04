import React from "react";
import WebsiteNavbar1 from "./WebsiteNavbar1";
import WebsiteNavbar2 from "./WebsiteNavbar2";

const WebsiteCoverandNavbar = ({ navbar, where }) => {
  return (
    <div className="w-full h-screen bg-[url('/displaypic2.jpg')] bg-cover bg-no-repeat bg-center ">
      {/* <WebsiteNavbar2 where={0} /> */}
      {navbar === "1" ? (
        <WebsiteNavbar1 where={where} />
      ) : (
        <WebsiteNavbar2 where={where} />
      )}
    </div>
  );
};

export default WebsiteCoverandNavbar;
