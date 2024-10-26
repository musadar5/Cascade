"use client";
import React, { useState, useEffect } from "react";
import styles from "./SellerSidebar.module.css";
import Link from "next/link";

const SellerSidebar = ({showSidebar}) => {
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [StoreSettingShow, SetStoreSettingShow] = useState(false);
  const [ManageProductsShow, SetManageProductsShow] = useState(false);
  const [OrderShow, SetOrderShow] = useState(false);
  const [a, seta] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerHeight = 144;
      const totalHeight = document.body.scrollHeight;
      console.log("hello", document.body.scrollHeight - 144 - 64);
      const b = document.body.scrollHeight - 144 - 64 - windowHeight;
      seta(b);

      if (scrollY >= totalHeight - windowHeight - footerHeight) {
        setIsAbsolute(true);
      } else {
        setIsAbsolute(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${!showSidebar && "hidden"} z-20 transition-all duration-300 ease-in-out fixed pt-5 pb-6 overflow-y-auto text-sm overflow-x- w-64 flex border-r border-gray-800 flex-col ${
        isAbsolute ? "absolute" : "fixed"
      } bg-black text-white ${styles.ScrollComponent} `}
      style={{
        height: "calc(100vh - 64px)",
        top: isAbsolute ? `${128 + a}px` : "auto",
        bottom: isAbsolute ? "auto" : "0px",
        transition: "top 0.3s ease",
        color: "#8c8c8c",
      }}
    >
      <div className=" flex-none w-full h-12 flex  items-center px-5  ">
        <Link className="hover:text-white" href={"/Seller/dashboard"}>Dashboard</Link>
      </div>

      <button
        onClick={() => {
          StoreSettingShow === false
            ? SetStoreSettingShow(true)
            : SetStoreSettingShow(false);
        }}
        className="flex-none hover:text-white w-full h-12 flex justify-between  items-center px-5 "
      >
        <div>Store Settings</div>
        <div className="w-4">
          <img
            src={StoreSettingShow === true ? "/up.png" : "/down.png"}
            alt="show"
          />
        </div>
      </button>
      {StoreSettingShow && (
        <div className="flex-none  w-full flex flex-col border-l border-gray-800 items-start justify-center ml-5 px-5 pt-4">
          <Link className="h-10 hover:text-white" href={""}>
            Store Appearance
          </Link>
          <Link className="h-10 hover:text-white" href={""}>
            Store Details
          </Link>
          <Link
            title="Check out a sample store for your help!"
            className="h-10 hover:text-white"
            href={""}
          >
            Sample Store
          </Link>
        </div>
      )}

      <button
        onClick={() => {
          ManageProductsShow === false
            ? SetManageProductsShow(true)
            : SetManageProductsShow(false);
        }}
        className="flex-none hover:text-white w-full h-12 flex justify-between  items-center px-5 "
      >
        <div>Manage Products</div>
        <div className="w-4">
          <img
            src={ManageProductsShow === true ? "/up.png" : "/down.png"}
            alt="show"
          />
        </div>
      </button>
      {ManageProductsShow && (
        <div className="flex-none  w-full flex flex-col border-l border-gray-800 items-start ml-5 px-5 pt-3">
          <Link className="h-10 hover:text-white" href={""}>
            Add Products
          </Link>
          <Link className="h-10 hover:text-white" href={""}>
            Edit/View Products
          </Link>
          <Link className="h-10 hover:text-white" href={""}>
            Categories
          </Link>
        </div>
      )}

      <button
        onClick={() => {
          OrderShow === false ? SetOrderShow(true) : SetOrderShow(false);
        }}
        className="flex-none hover:text-white w-full h-12 flex justify-between  items-center px-5 "
      >
        <div>Orders</div>
        <div className="w-4">
          <img src={OrderShow === true ? "/up.png" : "/down.png"} alt="show" />
        </div>
      </button>
      {OrderShow && (
        <div className="flex-none  w-full flex flex-col border-l border-gray-800 items-start ml-5 px-5 pt-3">
          <Link className="h-10 hover:text-white" href={""}>
            Pending
          </Link>
          <Link className="h-10 hover:text-white" href={""}>
            Processing
          </Link>
          <Link className="h-10 hover:text-white" href={""}>
            Delivered
          </Link>
          <Link className="h-10 hover:text-white" href={""}>
            Completed
          </Link>
        </div>
      )}

      <div className="flex-none  w-full h-12 flex items-center px-5">
      <Link className="hover:text-white" href={""}>Customer</Link>
      </div>

      <div className="flex-none  w-full h-12 flex items-center px-5">
      <Link className="hover:text-white" href={""}>Inventory</Link>
      </div>

      <div className="flex-none  w-full h-12 flex items-center px-5">
      <Link className="hover:text-white" href={""}>Analytics</Link>
      </div>

      <div className="flex-none  w-full h-12 flex items-center px-5">
      <Link className="hover:text-white" href={""}>Promotions</Link>
      </div>

      <div className="flex-none  w-full h-12 flex items-center px-5">
      <Link className="hover:text-white" href={""}>Payment & Shipping</Link>
      </div>
      
      <div className="flex-none  w-full h-12 flex items-center px-5">
      <Link className="hover:text-white" href={""}>View Your Store</Link>
      </div>

      <div className="flex-none w-full h-12 flex items-center text-sm text-blue-300 mt-7 px-5">
      <Link className="hover:text-blue-400 " href={""}>Having trouble?</Link>
      </div>
    </div>
  );
};

export default SellerSidebar;
