"use client"
import { useState } from "react";
import SellerFooter from "@/app/components/SellerFooter";
import SellerNavbar from "@/app/components/SellerNavbar";
import SellerSidebar from "../../components/SellerSidebar";
import Script from "next/script";




export default function SellerLayout({ children }) {

  const[showSidebar,setShowSidebar]=useState(true);
  return (
    <div className="bg-black">
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      <SellerNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className=" flex ">
        <SellerSidebar showSidebar={showSidebar}/>
        <div className={`${showSidebar && "lg:ml-64"} ${showSidebar && "ml-0"} flex-1 mt-16 min-h-screen`}>{children}</div>
      </div>


      <SellerFooter/>
    </div>
    
  );
}
