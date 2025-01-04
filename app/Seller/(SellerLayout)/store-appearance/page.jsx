"use client";
import WebsiteHeader from "@/app/components/WebsiteHeader";
import React, { useEffect, useState } from "react";
import "flowbite";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import HeaderMsgsDropdown from "@/app/components/HeaderMsgsDropdown";
import HeaderColorDropdown from "@/app/components/HeaderColorDropdown";
import EditPreviewButton from "@/app/components/EditPreviewButton";
import WebsiteNavbar1 from "@/app/components/WebsiteNavbar1";
import WebsiteCoverandNavbar from "@/app/components/WebsiteCoverandNavbar";

const Page = () => {
  const [headerChecked, setheaderChecked] = useState(false); //database se aay gi value
  const [headermsg, setheadermsg] = useState(new Array(3).fill(null)); //database se aay gi value
  const [headercolor, setheadercolor] = useState("red"); //database se aay gi value
  const [showportion, setshowportion] = useState("edit"); //edit or preview
  const [NavbarId, setNavbarId] = useState("1"); //1 or 2

  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "loading") return;

    if (
      status === "unauthenticated" ||
      (session && session.user.role !== "seller")
    ) {
      router.push("/Seller/login");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <Loader />;
  }

  if (
    status === "unauthenticated" ||
    (session && session.user.role !== "seller")
  ) {
    return null;
  }

  return (
    <div className="fullblock">
      <EditPreviewButton
        showportion={showportion}
        setshowportion={setshowportion}
      />
      <div className="bg-black min-h-screen flex  ">
        <div
          className={`${
            showportion === "preview" ? "hidden" : "flex-1"
          } edit-portion md:flex-col w-1/2 md:flex-1 bg-yellow-300`}
        >
          <div className="headerSetting w-full h-10 bg-blue-300 flex items-center justify-between px-3">
            <button>
              <img className="w-5 " src="/infoButton.svg" alt="infobutton" />
            </button>

            {headerChecked && (
              <HeaderMsgsDropdown
                headermsg={headermsg}
                setheadermsg={setheadermsg}
              />
            )}

            {headerChecked && (
              <HeaderColorDropdown
                headercolor={headercolor}
                setheadercolor={setheadercolor}
              />
            )}

            <div className="checkbox flex items-center gap-1 ">
              <input
                type="checkbox"
                name="showHeader"
                id="showHeader"
                onChange={(e) => setheaderChecked(e.target.checked)}
              />
              <label className="text-gray-800 text-sm" htmlFor="showHeader">
                Show Header?
              </label>
            </div>
          </div>

          <div className="bg-blue-400 w-full h-20 flex justify-center items-center gap-4 md:gap-14 px-3">
            <div className="font-semibold text-sm bg-white">
              Choose the Navbar of your choice!
            </div>
            <div className="radiobuttons flex flex-col justify-center items-center gap-1">
              <div className="navbar1 flex items-center gap-1 ">
                <input
                  type="radio"
                  checked={NavbarId === "1"}
                  name="navbar"
                  id="navbar1"
                  onChange={(e) => {
                    e.target.checked ? setNavbarId("1") : null;
                  }}
                />
                <label className="text-gray-800 text-sm" htmlFor="navbar1">
                  Navbar 1
                </label>
              </div>

              <div className="checkbox flex items-center gap-1 ">
                <input
                  type="radio"
                  checked={NavbarId === "2"}
                  name="navbar"
                  id="navbar2"
                  onChange={(e) => {
                    e.target.checked ? setNavbarId("2") : null;
                  }}
                />
                <label className="text-gray-800 text-sm" htmlFor="navbar2">
                  Navbar 2
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            showportion === "edit" ? "hidden" : "flex-1"
          } website-portion md:border-l-2 md:flex md:flex-1 w-1/2 md:border-l-black bg-white   `}
        >
          <div className="w-full ">
            {headerChecked && (
              <WebsiteHeader headermsg={headermsg} headercolor={headercolor} />
            )}
            {/* {NavbarId === "1" ? <WebsiteNavbar1 /> : null}{" "} */}
            {/* {NavbarId === "2" ? <WebsiteCoverandNavbar navbar={NavbarId} /> : null}{" "} */}
            <WebsiteCoverandNavbar navbar={NavbarId} where={false} />
          </div>
        </div>
      </div>
      <div className="save-portion w-full  h-16 flex justify-center items-center gap-5">
        <p className="text-gray-400">Don't forget to save your Updates!</p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
