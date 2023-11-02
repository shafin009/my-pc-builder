/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import RootLayout from "./../../components/Layouts/RootLayout";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../firebase/firebase.auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const signUp = () => {

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center sm:text-3xl text-3xl font-medium title-font m-10 text-gray-900">
            Sign Up{" "}
          </h1>

          <br />
          <br />
          <br />
          <br />
          <br />
        
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  User Name
                </label>
                <input
               
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your User Name"
                  required
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
               
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative flex-grow w-full">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  PassWord
                </label>
                <input
                  {...register("password", { required: true })}
                  placeholder="Your Password"
                  type="text"
                  id="password"
                  name="password"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className=" mx-auto flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                SignUp
              </button>
            </div>
          
        </div>
      </section>

      {/* <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "https://my-pc-builder-store.netlify.app/",
          })
        }
        class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Sign Up With Google
      </button> */}

      <Link href="/login">
        <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Login accout if have
        </button>
      </Link>
    </div>
  );
};

export default signUp;

signUp.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
