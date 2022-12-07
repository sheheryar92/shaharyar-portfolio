import React from 'react'
import { motion } from "framer-motion"

import Image from 'next/image';
 type Props = {
    directionLeft? : boolean;
}

export default function SkillGrid({directionLeft}: Props) {

  const ReactLogo = '/../public/react.png'

  return (
    <div className='group relative flex cursor-pointer '>


<motion.div 
   initial={{
    x: directionLeft ? -200 : 200,
    opacity: 0
}} 
transition={{
    duration: 1
}}
whileInView={{
    opacity: 1 ,
    x: 0
}}
>

<Image
  src={ReactLogo}
  width={90}
  height={90}
  
  alt=""
  className='rounded-full border border-gray-500  object-cover
  filter group-hover:grayscale transition duration-300 ease-out'
  />

</motion.div>


    
<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-20 w-20 rounded-full z-0'>
<div className='flex items-center justify-center h-full '><p className='text-3xl font-bold text-black opacity-100'>100%</p></div>
</div>



    </div>
  ) 
}
