import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"


type Props = {}

function Header({}: Props) {
  return (
    <header className='flex flex-row justify-between p-5 max-w-7xl mx-auto
    sticky top-0 z-20
    '>

<motion.div
initial={{
   x: -500,
   opacity: 0,
   scale: 0.5 
}}
animate = {{
    x: 0,
    opacity: 1,
    scale: 1
}}
transition={{
    duration: 1.5
}}
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







<motion.div
initial={{
   x: 500,
   opacity: 0,
   scale: 0.5 
}}
animate = {{
    x: 0,
    opacity: 1,
    scale: 1
}}
transition={{
    duration: 1.5
}}
>


<div className='flex  text-center items-center cursor-pointer'>
<SocialIcon url="https://www.linkedin.com/in/syed-sheheryar-qazi-836a827a/"
fgColor='gray'
bgColor='none'
/>
<p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>Get In Touch</p>
</div>
</motion.div>

    </header>
  )
}

export default Header