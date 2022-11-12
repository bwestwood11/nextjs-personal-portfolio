import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center md:-mb-72">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im <span className="text-[#5651e5]">Brett</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Im a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            Im focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/brett-westwood/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/bwestwood11">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:dabrettwestwood@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="https://www.tiktok.com/@brett_westwood?_t=8XGG5SVUohy&_r=1">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTiktok />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
