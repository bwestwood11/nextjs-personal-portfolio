import Image from "next/image";
import Link from "next/link";
import React from "react";
import headshot from "../public/assets/headshot.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center md:pt-72 md:-mb-72"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"> I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last year honing in on my front-end web development
            skills; however, before that I was running a small local marketing
            agency. I have always had a knack for technology and working with
            computers. I started with the basics of HTML & CSS. Now I am very
            proficient in Javascript, Typescript, Firebase, Tailwindcss, React,
            NextJS & Rest APIs.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I currently work on a month-to-month basis for a
            local small business. Also, I have started freelancing for gigs on
            Upwork & Fiverr. I have fallen in love with everything about coding.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={headshot}
            width="1175"
            height="1175"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
