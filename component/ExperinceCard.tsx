import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Ibex from '../public/ibex.jpg'
import ReactLogo from '../public/react.png'
type Props = {}

function ExperinceCard({}: Props) {





  return (
    <article className='flex flex-col  rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

  <motion.div 
    initial={{
      y: -100,
      opacity: 0
     }}
     transition={{
      duration: 1.2
     }}
     whileInView={{ opacity: 1 , y: 0}}
     className='w-32 h-32 rounded-full  '
  >

<Image  alt='' src={Ibex} 

className='w-32 h-32 rounded-full   '
/>

  </motion.div>
        



<div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>IBEX</h4>
    <p className='font-bold text-2xl mt-1'>WEB DEVELOPER INTERN</p>

<div className='flex space-x-2 m-y-2'>
<Image
className='w-10 h-10 rounded-full object-cover object-center'
src={ReactLogo}
alt=""  />
<Image
className='w-10 h-10 rounded-full object-cover object-center'
src={ReactLogo}
alt=""  />
<Image
className='w-10 h-10 rounded-full object-cover object-center'
src={ReactLogo}
alt=""  />
    </div>
<p className='p-y-3 text-gray-300 uppercase'>Started Work... - Ended:... </p>
<ul className='list-disc space-y-4 ml-5 text-lg'>
    <li>React js</li>
    <li>React js</li>
    <li>React js</li>
    <li>React js</li>
    <li>React js</li>
</ul>

</div>




        </article>

  )
}

export default ExperinceCard