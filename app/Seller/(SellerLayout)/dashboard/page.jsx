"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import axios from "axios";
import Blur from "@/app/components/Blur";
import StoreStartForm from "@/app/components/StoreStartForm";

const page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [ShowForm, SetShowForm] = useState(false);

  useEffect(() => {
    console.log("session is :", session);
    if (status === "loading") return;

    if (
      status === "unauthenticated" ||
      (session && session.user.role !== "seller")
    ) {
      router.push("/Seller/login");
    }
  }, [status, session, router]);

  useEffect(() => {
    if (status === "loading") return;

    if (session && session.user && session.user.storeid === "0") {
      SetShowForm(true);
    }
  }, [status, session]);

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
    <div className="text-white flex w-full flex-col justify-center items-center min-h-screen bg-black">
      {ShowForm ? (
        <StoreStartForm ShowForm={ShowForm} SetShowForm={SetShowForm} />
      ) : null}
      <h1>THIS IS THE HOME PAGE FOR SELLER</h1>
      <div className="flex flex-col justify-center items-center">
        Signed in as {session.user.name} ({session.user.role}) <br />
        <button
          className="bg-blue-500 text-white m-auto"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>

      <div>helloooo</div>
    </div>
    // <></>
  );
  return null;
};

export default page;
