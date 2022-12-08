import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  const Vercel = "/../public/pp.jpg";
  return (
    <div
    className="flex flex-col md:flex-row items-center 
    h-screen
    relative
text-center
md:text-left 
max-w-7xl
mx-auto
px-8
justify-evenly"
  >

        <h3
          className="text-gray-500 tracking-[20px] 
          uppercase 
   
          absolute 
          top-24
       
text-xl"
        >
          about
        </h3>
 

      {/* FLEX */}


        {/* image and text */}
       <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="md:mt-0  mt-35 m:mb-0 flex-shrink-0 rounded-full  h-17 w-17 md:rounded-xl object-cover md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] -mb-20"
      >
        <Image
          alt=""
          src={Vercel}
          height={300}
          width={300}
          
          className="  flex-shrink-0 rounded-full  h-56 w-56 md:rounded-xl object-cover md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] -mb-20  "
        />
      </motion.div> 


        <div className="space-y-5 px-0 md:px-10   ">
          <h4 className="text-xl md:text-4xl font-semibold  md:text-left text-center uppercase ">
            here is a{" "}
            <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
            backgroud
          </h4>
          <p className="text-base space-x-2 md:space-x-0 ">
            Hi this is Sheheryar, a professional web developer, Practical
            knowledge of website and application coding, quick to pick up and
            master new technologies, competent to work both independently and in
            team. excellent understanding of MERN, HTML, JavaScript, and React
            Native, as well as strong communication and problem-solving
            abilities. Always had a passion for web development. I am always
            looking for new technology and keeping up with business trends.
          </p>
        </div>

        {/* image and text */}
 
      {/* FLEX */}
    </div>
  );
}

export default About;
