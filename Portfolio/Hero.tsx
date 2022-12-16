import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaGooglePlus, FaGithub } from "react-icons/fa";
import Image from "next/image";
import ProfilePicture from "../public/pp.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, flags] = useTypewriter({
    words: ["Hi , The Name's Sheheryar Qazi", "Love To Code", "Karachi"],
    loop: 2000,
    // typeSpeed: 20,
    onLoopDone: () => console.log("done from typewriter hook"),
  });
  return (
    <div className="min-h-screen items-center flex flex-col
    justify-evenly max-w-7xl mx-auto px-5 md:px
    ">
  

 
      {/* CONTENT */}

      <h1
        className="text-teal-500 tracking-[20px] 
  
        text-2xl md:text-5xl
          uppercase  font-semibold  animate-pulse"
      >
        Developer
      </h1>

      <div className="flex flex-col space-y-5
     w-full justify-evenly  items-center ">

      <span className="text-xl md:text-4xl font-semibold  uppercase  
       dark:text-white
      
      text-gray-500">
        { text} 
         
        <Cursor cursorColor="orange"  />
      </span>

      <p className="text-base  text-center
      dark:text-white
      leading-8 text-gray-500">
        Hi this is Sheheryar, a professional web developer, Practical knowledge
        of website and application coding, quick to pick up and master new
        technologies, competent to work both independently and in team.
        excellent understanding of MERN, HTML, JavaScript, and React Native, as
        well as strong communication and problem-solving abilities. Always had a
        passion for web development. I am always looking for new technology and
        keeping up with business trends.
      </p>

      {/* CONTENT */}

      {/* social */}
      <div className="cursor-pointer flex items-center space-x-16 text-center text-4 justify-center text-gray-500 text-4xl">
        <FaGithub />
        <FaFacebook />
        <FaGooglePlus />
      </div>
      {/* social */}

      {/* image */}

      <Image alt=""
        src={ProfilePicture}
        height="250"
        width="250"
        className="h-100 w-100 rounded-full object-cover text-center items-center m-auto mt-5"
      />

      {/* image */}
</div>



      </div>

  );
}

export default Hero;
