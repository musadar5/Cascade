import { useEffect } from "react";
import React from "react";
import "flowbite";

const HeaderMsgsDropdown = ({ headermsg, setheadermsg }) => {
    useEffect(() => {
        const dropdownButton = document.getElementById("dropdownDefaultButton");
        const dropdownMenu = document.getElementById("dropdown");
      
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
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700  justify-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-20 h-6 text-sm py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
        type="button"
      >
        Message{" "}
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
        id="dropdown"
        class="absolute top-24 mx-auto z-10 hidden bg-gray-400 divide-y divide-gray-100 rounded-lg  w-28 "
      >
        <ul
          className="py-1 text-sm text-black  flex-col gap-2"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="flex justify-center items-center">
            <input
              defaultValue={headermsg[0]}
              onChange={(e) => {
                const newarray = [...headermsg];
                newarray[0] = e.target.value || null; // Nullify empty strings
                setheadermsg(newarray);
              }}
              className=" text-center outline-none w-full mb-1 mx-1 rounded-md border border-gray-700 "
              type="text"
              name="text1"
              id="text1"
              placeholder="Enter msg 1"
            />
          </li>
          <li className="flex justify-center items-center">
            <input
              defaultValue={headermsg[1]}
              onChange={(e) => {
                const newarray = [...headermsg];
                newarray[1] = e.target.value || null; // Nullify empty strings
                setheadermsg(newarray);
              }}
              className=" text-center outline-none w-full mb-1 mx-1 rounded-md border border-gray-700 "
              type="text"
              name="text2"
              id="text2"
              placeholder="Enter msg 2"
            />
          </li>
          <li className="flex justify-center items-center w-full">
            <input
              defaultValue={headermsg[2]}
              onChange={(e) => {
                const newarray = [...headermsg];
                newarray[2] = e.target.value || null; // Nullify empty strings
                setheadermsg(newarray);
              }}
              className=" text-center outline-none w-full mx-1 rounded-md border border-gray-700 "
              type="text"
              name="text3"
              id="text3"
              placeholder="Enter msg 3"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMsgsDropdown;
