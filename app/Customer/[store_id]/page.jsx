"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import StoreNotExist from "@/app/components/StoreNotExist";
import WebsiteCoverandNavbar from "@/app/components/WebsiteCoverandNavbar";
import WebsiteHeader from "@/app/components/WebsiteHeader";

const page = ({ params }) => {
  const [headerChecked, setheaderChecked] = useState(false); //database se aay gi value
  const [headermsg, setheadermsg] = useState(new Array(3).fill(null)); //database se aay gi value
  const [headercolor, setheadercolor] = useState("red"); //database se aay gi value
  const [NavbarId, setNavbarId] = useState("1"); //1 or 2

  const { store_id } = params;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loader />;
  }

  // ----------------------------------------------------------------
  // check if the store exists in the database
  // if not then show the store does not exists page
  // <StoreNotExist/>
  // ----------------------------------------------------------------

  return (
    <div className="">
      
      <div className="w-full ">
        {headerChecked && (
          <WebsiteHeader headermsg={headermsg} headercolor={headercolor} />
        )}
        {/* {NavbarId === "1" ? <WebsiteNavbar1 /> : null}{" "} */}
        {/* {NavbarId === "2" ? <WebsiteCoverandNavbar navbar={NavbarId} /> : null}{" "} */}
        <WebsiteCoverandNavbar navbar={NavbarId} where={true} />
        <div className="min-h-72 bg-blue-400 w-full"></div>
      </div>
    </div>

    // <div className=" flex flex-col justify-center items-center min-h-screen">
    //   <h1>Store name : {store_id}</h1>
    //   <h1>
    //     THIS IS THE HOME PAGE FOR CUSTOMER ({store_id}) and (
    //     {session ? session.user.storeid : null})
    //   </h1>
    //   {!session ||
    //   (session && session.user.role !== "customer") ||
    //   (session && session.user.storeid !== store_id) ? (
    //     <div>Not signed in</div>
    //   ) : (
    //     <div className="flex flex-col justify-center items-center">
    //       Signed in as {session.user.name} ({session.user.role}) <br />
    //       <button
    //         className="bg-black text-white m-auto"
    //         onClick={() => signOut()}
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default page;
