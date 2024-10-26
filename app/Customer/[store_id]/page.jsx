"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";

const page = ({ params }) => {
  const { store_id } = params;
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loader />;
  }


  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen">
      <h1>Store name : {store_id}</h1>
      <h1>THIS IS THE HOME PAGE FOR CUSTOMER  ({store_id}) and ({session?session.user.storeid :null})</h1>
      {!session ||
      (session && session.user.role !== "customer") ||
      (session && session.user.storeid !== store_id) ? (
        <div>Not signed in</div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          Signed in as {session.user.name} ({session.user.role}) <br />
          <button
            className="bg-white text-black m-auto"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
