"use client";
import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import CrossButton from "./CrossButton";
import styles from "./StoreStartForm.module.css";
import { useDropzone } from "react-dropzone";

const StoreStartForm = ({ ShowForm, SetShowForm }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoName, setLogoName] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [coverName, setCoverName] = useState(null);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Update state when checkbox is checked or unchecked
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await axios.post("", data);
      if (result) {
        console.log("form submitted!!");
        SetShowForm(false);
      }
    } catch (error) {
      console.log("error: form not submited!");
    }
  };

  // Disable scrolling when the component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // First Dropzone setup
  const {
    getRootProps: getFirstRootProps,
    getInputProps: getFirstInputProps,
    isDragActive: IsFirstDragActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setValue("Logo", acceptedFiles);
      setLogoPreview(URL.createObjectURL(acceptedFiles[0]));
      setLogoName(acceptedFiles[0].name);
    },
    multiple: false,
    accept: ".jpg, .jpeg, .png, .gif",
  });

  // Second Dropzone setup
  const {
    getRootProps: getSecondRootProps,
    getInputProps: getSecondInputProps,
    isDragActive: IssecondDragActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setValue("CoverImage", acceptedFiles);
      setCoverPreview(URL.createObjectURL(acceptedFiles[0]));
      setCoverName(acceptedFiles[0].name);
    },
    multiple: false,
    accept: ".jpg, .jpeg, .png, .gif",
  });

  return (
    <div className="ForBgBlur fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-20 flex flex-col justify-center items-center">
      <div
        className={`w-7/12 bg-white text-black ${styles.ScrollComponent} overflow-auto border flex flex-col items-center gap-6  h-5/6 rounded-lg`}
      >
        <div className="flex w-full justify-center">
          <div className=" pt-4  flex-1 text-center text-gray-300">
            {" "}
            (Note: you can change this information later)
          </div>
          {/* <CrossButton Hide={ShowForm} SetHide={SetShowForm} /> */}
        </div>

        {/* <div className="form_material w-2/3 flex flex-col justify-center"> */}
        <h1 className="text-black text-2xl font-bold  px-8">
          Enter Information to Proceed
        </h1>
        {/* ------------------------------ */}
        {/* {errors.StoreName && (
          <div className="text-sm text-red-500 ">
            {errors.StoreName.message}
          </div>
        )} */}

        {errors.StoreName && (
          <div className="text-sm text-red-500 ">
            {errors.StoreName.message}
          </div>
        )}

        {errors.Email && (
          <div className="text-sm text-red-500 ">{errors.Email.message}</div>
        )}

        {errors.StoreDescription && (
          <div className="text-sm text-red-500 ">
            {errors.StoreDescription.message}
          </div>
        )}

        {errors.InstaLink && (
          <div className="text-sm text-red-500 ">
            {errors.InstaLink.message}
          </div>
        )}

        {errors.FacebookLink && (
          <div className="text-sm text-red-500 ">
            {errors.FacebookLink.message}
          </div>
        )}

        {errors.TiktokLink && (
          <div className="text-sm text-red-500 ">
            {errors.TiktokLink.message}
          </div>
        )}

        {errors.TwitterLink && (
          <div className="text-sm text-red-500 ">
            {errors.TwitterLink.message}
          </div>
        )}

        {/* --------------------------------- */}
        <form
          className="w-9/12 pb-16 flex flex-col gap-5 justify-center items-center pt-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="  w-full grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("StoreName", {
                  required: {
                    value: true,
                    message: "*Store name can't be empty",
                  },
                  maxLength: {
                    value: 50,
                    message: "*Store Name can not exceed 50 characters",
                  },
                })}
                type="text"
                title="Enter your store name."
                id="store_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="store_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Store Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("Email", {
                  required: { value: true, message: "*Email can't be empty" },
                  maxLength: {
                    value: 100,
                    message: "*Email can not exceed 100 characters",
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "*Please Enter a valid Email",
                  },
                })}
                title="This email will be shown on your website as contact us information"
                type="text"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("StoreDescription", {
                required: {
                  value: true,
                  message: "*Store Description can't be empty",
                },
                maxLength: {
                  value: 250,
                  message: "*Store Description can not exceed 250 characters",
                },
              })}
              type="text"
              id="store_description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="store_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Store Description
            </label>
          </div>

          <div className="w-full flex-wrap mt-5 gap-3 flex justify-center ">
            <div className="flex flex-col items-start justify-center ">
              <div className="dragdropheading text-start mb-1 text-gray-500 text-sm ">
                Your store's Logo:
              </div>
              <label
                {...getFirstRootProps()}
                htmlFor="logo-pic"
                className={`flex flex-col items-center justify-center w-72 h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   ${
                  IsFirstDragActive ? "bg-gray-300" : "bg-gray-100"
                }  `}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPEG, JPG or GIF
                  </p>
                </div>
                <input
                  {...getFirstInputProps()}
                  {...register("Logo")}
                  id="logo-pic"
                  name="Logo"
                  type="file"
                  className="hidden"
                />
              </label>
              <div className="ml-2 logopreview h-6 mt-3 w-60">
                {logoPreview && (
                  <div className=" flex gap-3 items-center">
                    <img
                      className="w-8 h-full border border-gray-400"
                      src={logoPreview}
                      alt="logo"
                    />
                    <span className="text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden w-full">
                      {logoName}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <div className="SecondDropDownHeading text-start mb-1 text-gray-500 text-sm">
                Your store's Cover Picture:
              </div>
              <label
                {...getSecondRootProps()}
                htmlFor="cover-pic"
                className={`flex flex-col items-center justify-center w-72 h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   ${
                  IssecondDragActive ? "bg-gray-300" : "bg-gray-100"
                }  `}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPEG, JPG or GIF
                  </p>
                </div>
                <input
                  {...getSecondInputProps()}
                  {...register("CoverImage")}
                  id="cover-pic"
                  name="CoverImage"
                  type="file"
                  className="hidden"
                />
              </label>

              <div className="ml-2 coverpreview h-6 mt-3 w-60">
                {coverPreview && (
                  <div className=" flex gap-3 items-center">
                    <img
                      className="w-8 h-full border border-gray-400"
                      src={coverPreview}
                      alt="coverimage"
                    />
                    <span className="text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden w-full">
                      {coverName}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex items-center my-7">
            <input
              title="Do you want to show social media icons. These icons will be visible in the contact us section in your Website."
              onChange={handleCheckboxChange}
              id="show_social"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 checked:bg-blue-500 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="show-social"
              className="ms-2 text-sm font-medium text-gray-500 "
            >
              Show Social Media Icons?
            </label>
          </div>

          {isChecked && (
            <>
              <div className=" w-full grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    title="Enter your brand Instagram account link"
                    {...register("InstaLink", {
                      maxLength: {
                        value: 500,
                        message: "* Instagram link can't exceed 500 characters",
                      },
                    })}
                    type="text"
                    id="insta_link"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="insta_link"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Instagram Link
                  </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    {...register("FacebookLink", {
                      maxLength: {
                        value: 500,
                        message: "*Facebook link can't exceed 500 characters",
                      },
                    })}
                    title="Enter your brand Facebook account link"
                    type="text"
                    id="facebook_link"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="facebook_link"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Facebook Link
                  </label>
                </div>
              </div>

              <div className=" w-full grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    title="Enter your brand Tiktok account link"
                    {...register("TiktokLink", {
                      maxLength: {
                        value: 500,
                        message: "*Tiktok link can't exceed 500 characters",
                      },
                    })}
                    type="text"
                    id="tiktok_link"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="tiktok_link"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tiktok Link
                  </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    title="Enter your brand Facebook account link"
                    {...register("TwitterLink", {
                      maxLength: {
                        value: 500,
                        message: "*Twitter link can't exceed 500 characters",
                      },
                    })}
                    type="text"
                    id="twitter_link"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="twitter_link"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Twitter Link
                  </label>
                </div>
              </div>
            </>
          )}

          <input
            className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default StoreStartForm;
