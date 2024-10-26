"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";

const page = ({ params }) => {
  const { store_id } = params;
  const { data: session, status } = useSession();
  const [resmsg, setresmsg] = useState("");
  const router = useRouter();
  if (
    session &&
    session.user.role === "customer" && 
    session.user.storeid === store_id
  ) {
    router.push(`/Customer/${store_id}`);
  }

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  if (
    status === "authenticated" &&
    session.user.role === "customer" &&
    session.user.storeid === store_id
  ) {
    router.push(`/Customer/${store_id}`);
    return null; // Prevent page rendering
  }

  if (status === "loading") {
    return <Loader />;
  }

  const validateconfpwd = () => {
    if (watch("password") !== watch("confirmpassword")) {
      setError("validateconpwd", {
        message: "Confirm password doesn't match password*",
      });
    } else {
      clearErrors("validateconpwd");
    }
  };
  // ---------------------------------------------------
  const delay = (d) => {
    return new Promise((resolve) => setTimeout(resolve, d));
  };
  // ---------------------------------------------------

  const onSubmit = async (data) => {
    // await delay(2000);
    // console.log(data);

    data.storeid = store_id;
    try {
      const response = await axios.post("/api/auth/customer-signup", data);
      setresmsg(response.data.message);
    } catch (error) {
      setresmsg("Error: Something went wrong!");
    }
  };

  return (
    <div className=" flex justify-center ">
      <div className="px-4 sm:px-10 my-32 border flex flex-col gap-7 py-14 justify-center items-center  bg-gray-800 border-white rounded-xl">
        <h1 className="text-4xl text-white font-bold">{store_id}</h1>
        <p className="text-gray-400 font-bold">Sign up as a Customer.</p>
        {isSubmitting && (
          <div class="flex items-center text-gray-500">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only text-white">Loading...</span>
            </div>
            Creating your account
          </div>
        )}
        {resmsg && <div className="text-white">{resmsg}</div>}

        <form
          className=" w-full flex flex-col gap-5 justify-center items-center  "
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <div className="w-full flex flex-col">
            <input
              className="px-4 py-2 w-full border border-gray-400 focus:outline-none focus:border-gray-700 bg-slate-200"
              placeholder="Full Name"
              {...register("name", {
                required: { value: "true", message: "This value is required*" },
                maxLength: {
                  value: 50,
                  message: "Length of name cannot exceed 50*",
                },
              })}
            />
            {errors.name && (
              <span className="text-white max-w-2/3">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              className="px-4 py-2 w-full border border-gray-400 focus:outline-none focus:border-gray-700 bg-slate-200"
              placeholder="Email"
              {...register("email", {
                required: { value: "true", message: "This value is required*" },
                maxLength: { value: 60, message: " Email cannot exceed 60*" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid Email*",
                },
              })}
            />
            {errors.email && (
              <span className="text-white max-w-2/3">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              className="px-4 py-2 w-full border border-gray-400 focus:outline-none focus:border-gray-700 bg-slate-200"
              placeholder="Username"
              {...register("username", {
                required: { value: "true", message: "This value is required*" },
                maxLength: {
                  value: 50,
                  message: " Username cannot exceed 50*",
                },
                pattern: {
                  value: /^(?![0-9])[a-z0-9_]+$/,
                  message: "Enter a valid username*",
                },
              })}
            />
            {errors.username && (
              <span className="text-white max-w-2/3">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              type="password"
              className="px-4 py-2 w-full border border-gray-400 focus:outline-none focus:border-gray-700  bg-slate-200"
              placeholder="Password"
              {...register("password", {
                required: { value: "true", message: "This value is required*" },
                maxLength: {
                  value: 50,
                  message: " Password cannot exceed 50*",
                },
                minLength: {
                  value: 8,
                  message: "Password can't be less than 8 characters*",
                },
              })}
            />
            {errors.password && (
              <span className="text-white max-w-2/3">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              type="password"
              className="px-4 py-2 w-full border border-gray-400 focus:outline-none focus:border-gray-700 bg-slate-200"
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                required: { value: "true", message: "This value is required*" },
                maxLength: {
                  value: 50,
                  message: " Confirm Password cannot exceed 50*",
                },
                minLength: {
                  value: 8,
                  message: "Can't be less than 8 characters*",
                },
                validate: validateconfpwd,
              })}
            />
            {errors.confirmpassword && (
              <span className="text-white max-w-2/3">
                {errors.confirmpassword.message}
              </span>
            )}
            {errors.validateconpwd && (
              <span className="text-white max-w-2/3">
                {errors.validateconpwd.message}
              </span>
            )}
          </div>

          <input
            className={`px-4 py-2 w-full border rounded-xl border-gray-400 ${
              errors.name ||
              errors.username ||
              errors.password ||
              errors.email ||
              errors.confirmpassword ||
              errors.validateconpwd ||
              isSubmitting
                ? " text-gray-500 bg-blue-100"
                : "hover:bg-blue-500 active:border-gray-800' bg-blue-300"
            }`}
            type="submit"
            value="Sign up"
            disabled={
              errors.name ||
              errors.username ||
              errors.password ||
              errors.email ||
              errors.confirmpassword ||
              errors.validateconpwd ||
              isSubmitting
            }
          />
        </form>
        <div className="flex flex-row items-center justify-center ">
          {" "}
          <div className="border border-gray-300 h-0 w-32"></div>{" "}
          <div className="mx-2 text-gray-300">OR</div>{" "}
          <div className="border border-gray-300 h-0 w-32"></div>{" "}
        </div>
        <div className="w-full text ">
          <button
            type="button"
            className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
