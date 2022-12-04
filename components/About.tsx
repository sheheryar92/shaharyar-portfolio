import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Vercel from "../public/pp.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
      duration:  1.5
    }}
    className="h-screen relative flex flex-col md:flex-row max-w-7xl mx-auto px-8 justify-evenly items-center ">
      <h3 className=" text-center text-2xl uppercase md:absolute top-24  tracking-[20px] text-gray-500">
        about
      </h3>
        <motion.img
      initial={{
        x:-200,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/307563209_5570744926345238_7909683758125183185_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEzJGJs5DFU1bMQzlcmO7PPqTmuKT82NgapOa4pPzY2Bi17eV0otVnXGKuOP_5CcA9IV6D-1ejEbk_U3S9hVR4F&_nc_ohc=W5qIag6MfEQAX-bXESK&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfDhQXIjioG9cLRzvJnKdoFnKkIlFnq6Lgper8h9R7n1Lw&oe=63923478"
        className=" m:mb-0 flex-shrink-0 rounded-full  h-56 w-56 md:rounded-xl object-cover md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] -mb-20 "
      
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold  md:text-left text-center uppercase ">
here is a  <span className="underline decoration-[#f7ab0a]/50">little</span>  backgroud
        </h4>
   <p className="text-base">Hi this is Sheheryar, a professional web developer, Practical knowledge of website and application coding, quick to pick up and master new technologies, competent to work both independently and in team. excellent understanding of MERN, HTML, JavaScript, and React Native, as well as strong communication and problem-solving abilities. Always had a passion for web development. I am always looking for new technology and keeping up with business trends.

</p>
      </div>
    </motion.div>
  );
}

export default About;
