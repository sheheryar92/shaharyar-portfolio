import React from 'react'
import ExperinceCard from './ExperinceCard'
import { motion } from "framer-motion"

type Props = {}

function WorkEperince({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
  transition={{duration: 1.5}}
    className='h-screen relative flex justify-evenly flex-col md:flex-row 
    items-center text-left max-w-7xl px-8 mx-auto 
    '>
        <h3 className='tracking-[15px] text-gray-500 uppercase text-2xl text-center md:absolute top-24'>exprience</h3>



{/* experinceCArd DIV*/}
 <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin 
 
 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
    <ExperinceCard />
   <ExperinceCard />
    {/*  <ExperinceCard />
    <ExperinceCard /> */}
</div> 
{/* experinceCArd DIV*/}
    </motion.div>
  )
}

export default WorkEperince