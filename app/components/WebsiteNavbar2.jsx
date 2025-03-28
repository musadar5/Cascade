import React from "react";
import Script from "next/script";
import { useState, useEffect } from "react";

const WebsiteNavbar2 = ({ where }) => {
  //props: store name , store logo,coverpic ,where         (if where===true means website page else editpage)

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled ? "bg-white" : null
      }  w-full h-16  flex justify-between ${
        where ? "fixed" : "sticky top-16"
      } items-center md:px-12 px-5 transition-colors duration-500 ease-in-out`}
    >
      {/* <div className="flex gap-8 justify-center items-center"> */}
        <div className=" w-14 h-14  flex justify-center items-center  ">
          <img
            src="/wordpress.svg" //from database
            alt="logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
      {/* </div> */}
      {/* end  */}
      {/* <div
          className={`storename bg-transparent ${
            isScrolled ? "text-black " : "text-white right-1/2 top-28  p-0  text-9xl "
          }  fixed font-bold gelasio-forNavbar2Logo `}
          style={{fontSize:`${
            isScrolled ? "" : "150px"
          }`}}
        >
          GUCCI
        </div> */}

      <div className="rightIcons flex gap-4 md:gap-7">
        <button className=" ">
          <lord-icon
            src="https://cdn.lordicon.com/ggirntso.json"
            trigger="hover"
            stroke="bold"
            colors={`primary:${isScrolled ? "#000000" : "#ffffff"},secondary:${
              isScrolled ? "#000000" : "#ffffff"
            }`}
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </button>

        <button>
          <lord-icon
            src="https://cdn.lordicon.com/kdduutaw.json"
            trigger="hover"
            stroke="bold"
            colors={`primary:${isScrolled ? "#000000" : "#ffffff"},secondary:${
              isScrolled ? "#000000" : "#ffffff"
            }`}
            style={{ width: "23px", height: "23px" }}
          ></lord-icon>
        </button>

        <button>
          <lord-icon
            src="https://cdn.lordicon.com/aydxrkfl.json"
            trigger="hover"
            stroke="bold"
            colors={`primary:${isScrolled ? "#000000" : "#ffffff"},secondary:${
              isScrolled ? "#000000" : "#ffffff"
            }`}
            style={{ width: "23px", height: "23px" }}
          ></lord-icon>
        </button>
        <button className="mb-1.5">
          <div
            className={`${
              isScrolled ? "text-black" : "text-white"
            } flex justify-center items-center text-xs space-mono-regular gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full max-h-full object-contain"
              fill={`${isScrolled ? "#000000" : "#ffffff"}`}
              stroke="bold"
              viewBox="0 0 50 50"
              width="20px"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
            </svg>
            MENU
          </div>
        </button>
      </div>
    </div>
  );
};

export default WebsiteNavbar2;
