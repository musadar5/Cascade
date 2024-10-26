import { useEffect } from "react";
import React from "react";
import "flowbite";

const HeaderMsgsDropdown = ({ headercolor, setheadercolor }) => {
    useEffect(() => {
        const dropdownButton = document.getElementById("dropdownColorButton");
        const dropdownMenu = document.getElementById("colordropdown");
      
        const toggleDropdown = () => {
          dropdownMenu.classList.toggle("hidden");
        };
      
        dropdownButton.addEventListener("click", toggleDropdown);
      
        // Cleanup the event listener
        return () => {
          dropdownButton.removeEventListener("click", toggleDropdown);
        };
      }, []);
      

  return (
    <div className="flex flex-col  items-center">
      <button
        id="dropdownColorButton"
        data-dropdown-toggle="colordropdown"
        class="text-white bg-blue-700  justify-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-20 h-6 text-sm py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
        type="button"
      >
        Colours{" "}
        <svg
          className="w-2.5 h-2.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="colordropdown"
        class="absolute top-24 mx-auto z-10 hidden bg-gray-400 divide-y divide-gray-100 rounded-lg  w-28 "
      >
        <ul
          className="py-1 text-sm text-black  flex-col justify-start items-center gap-2"
          aria-labelledby="dropdownColorButton"
        >
          <li className="flex justify-start ml-3 gap-1 items-center">
           <input onChange={(e)=>{e.target.checked ? setheadercolor("red"):null}} type="radio" name="colour" id="colour" />
           Red
          </li>
          <li className="flex justify-start ml-3 gap-1 items-center">
          <input onChange={(e)=>{e.target.checked ? setheadercolor("blue"):null}} type="radio" name="colour" id="colour" />
          Blue
          </li>
          <li className="flex justify-start ml-3 gap-1 items-center">
          <input onChange={(e)=>{e.target.checked ? setheadercolor("yellow"):null}} type="radio" name="colour" id="colour" />
          Yellow
            
          </li>
          <li className="flex justify-start ml-3 gap-1 items-center">
          <input onChange={(e)=>{e.target.checked ? setheadercolor("black"):null}} type="radio" name="colour" id="colour" />
          Black
            
          </li>
          <li className="flex justify-start ml-3 gap-1 items-center">
          <input onChange={(e)=>{e.target.checked ? setheadercolor("pink"):null}} type="radio" name="colour" id="colour" />
          Pink
            
          </li>

          <li className="flex justify-start ml-3 gap-1 items-center">
          <input onChange={(e)=>{e.target.checked ? setheadercolor("white"):null}} type="radio" name="colour" id="colour" />
          White
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMsgsDropdown;
