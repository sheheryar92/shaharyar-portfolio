import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroCircles from "./HeroCircles";
import Profile from "../public/profile.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, flags] = useTypewriter({
    words: ["Hi , The Name's Sheheryar Qazi", "Love To Code", "Karachi"],
    loop: 2000,
    // typeSpeed: 20,
    onLoopDone: () => console.log("done from typewriter hook"),
  });
  return (
    <div className="h-screen flex justify-center 
    
   
    
    text-center flex-col overflow-hidden space-y-8 items-center">
      <HeroCircles />

      <Image
        src={Profile}
        alt="Picture of the author"
        className="w-32 h-32 object-cover mx-auto rounded-full relative"
      /> 
      <div className="z-20">
        <h2 className="text-gray-500 uppercase tracking-[15px] pb-2">
          web developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="orange" />
        </h1>

        <div className="pt-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experince">
            {" "}
            <button className="heroButton">Experince</button>
          </Link>
          <Link href="#skills">
            {" "}
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            {" "}
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;