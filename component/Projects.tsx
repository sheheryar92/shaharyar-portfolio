import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import C from '../public/c.png'
type Props = {}

function Projects({}: Props) {

    const projects = [1,2,3,4,5,6]

  return (
    <div className='h-screen relative flex flex-col justify-evenly items-center overflow-hidden text-left md:flex-row mx-w-full mx-auto '>
        <h3 className='text-2xl uppercase tracking-[20px] text-gray-500
        absolute top-24
        '>projects</h3>


<div className='w-full flex relative overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
 {projects.map( (p, i) => (
    <div key={i} className='w-screen flex-shrink-0 snap-center items-center
    transition duration-300 flex flex-col space-y-5 justify-center p-20 md:p-44  
    '>
      <motion.div    initial={{
         y: -300,
         opacity: 0
      }}
      transition={{
duration: 1.2
      }}
      whileInView={{
          opacity: 1,
          y: 0
      }}>

<Image src={C} 
  className='w-40 h-40 object-cover'
  alt=''
/>

      </motion.div>

<div
className='space-y-10 px-0 md:px-10 max-w-6xl'
> <h3 className='text-4xl uppercase font-semibold text-center'>
    <span className='underline decoration-[#F7AB0A]/50'>case study</span> {i + 1} </h3>
    <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, praesentium. A assumenda dicta iste sapiente illo, numquam consequuntur totam veniam voluptatum aut obcaecati, quia ut distinctio tempore earum eum libero.</p>
    </div>

    </div>
 ) )}
    {/* projects */}
      {/* projects */}
        {/* projects */}
</div>

<div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />

    </div>
  )
}

export default Projects
