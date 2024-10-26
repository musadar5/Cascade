// import React from "react";

// const Blur = () => {
//   return <div className="w-full m-80 text-white h-screen z-50 backdrop-blur-sm bg-transparent fixed">akjakjakjakjakajkajakjakjakjakjakakajkajak</div>;
// };
"use client"
import React, { useEffect } from "react";

const Blur = () => {
  // Disable scrolling when the component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-20 flex justify-center items-center">
      {/* <div className="text-white text-2xl">Loading...</div> */}
    </div>
  );
};

export default Blur;


