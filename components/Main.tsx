import React,{useState} from 'react'
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

import WorkExperince from "../components/WorkExperince";
import ContactMe from "../Portfolio/ContactMe";
import Experince from "../Portfolio/Experince";
import Skills from "../Portfolio/Skills";
import Work from "../Portfolio/Work";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { BsMoonStars } from "react-icons/bs";
type Props = {}

function Main({}: Props) {
      const [darkMode, setDarkMode] = useState(true)
  return (
      <div className={darkMode ? "dark" : ""}>
      <div className="snap-mandatory snap-y h-screen overflow-scroll
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      overflow-x-hidden
      dark:bg-[rgb(36,36,36)]
      ">
  
  {/* NAV */}
  <div  className="flex flex-row justify-between p-5 
      
      sticky top-0 z-20
      max-w-7xl mx-auto
     items-center">
        {/* left icons */}
        <motion.div 
        initial={{
          x:-200,
          opacity: 0
        }}
  
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
  className="md:space-x-2"
        >
     <SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
  fgColor='gray'
  bgColor='none'
  />
  <SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
  fgColor='gray'
  bgColor='none'
  
  />
  <SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
  fgColor='gray'
  bgColor='none'
  />
  <SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
  fgColor='gray'
  bgColor='none'
  />
  
        </motion.div>
        {/* left icons */}
  
        {/* right icons */}
        <motion.div
         initial={{
          x:100,
          opacity: 0
        }}
  
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className="space-x-2 flex items-center"
      >
  <SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
  fgColor='gray'
  bgColor='none'
  />
  <BsMoonStars 
  color="gray"
      size={20}
      className=' cursor-pointer' onClick={() => setDarkMode(!darkMode) } />
        <p className="hidden md:inline-flex">get in touch</p>
        </motion.div>
        {/* right icons */}
      </div>
  {/* NAV */}
  
    
       <section className="snap-start">
          <Hero />
        </section>
        <section className="snap-center"><About /></section>
        <section className="snap-center"><Experince /></section>
        <section className="snap-center"><Projects /></section>
        <section className="snap-center"><Skills /></section>
        <section className="snap-center"><ContactMe /></section>
      </div>
      </div>
  )
}

export default Main
