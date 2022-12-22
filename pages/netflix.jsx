import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/projects/netflixImg.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix Clone with Firebase Authorization</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-2"> I created a Netflix clone pulling in realtime data from the MovieDatabase API. I implemented multiple
          technologies to create a fully functional application. The sign-up and sign-in screen use the power of Googles Firebase Authentication and 
          Firestore Database. This will actually allow for the user to create an account and sign-in.</p>
          <p className="pt-4">
            Redux is implemented to keep track of the current users data. This allows for easy management of the user and their information. 
            Stripe is also a feature that is added to this application allowing the user to select between three plans. While logged in, 
            the application will let you know your current plan along with your monthly renewal date.
          </p>
          <p className="pt-4">
            Gve this application a try by clicking the demo button below.
          </p>
          <a href="https://netflix-clone-3f4da.web.app/">
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/bwestwood11/netflix-build">
          <button className="px-8 py-2 mt-4" py-2 mt-4>
            Code
          </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firestore Database
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TMDB API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className="underline cursor-pointer" >Back</p>
        </Link>

      </div>
    </div>
  );
};

export default netflix;