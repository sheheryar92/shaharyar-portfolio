import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperinceCard({}: Props) {
  return (
    <article className='flex  rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

   <motion.img
   initial={{
    y: -100,
    opacity: 0
   }}
   transition={{
    duration: 1.2
   }}
   whileInView={{ opacity: 1 , y: 0}}
   
   src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-1/307208068_393080479646902_2346896697063664978_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeE41N1NINUBaxSqklqeAHs5K4gi-v5l024riCL6_mXTbjPjIPScj9JNKOJMplEWmi2pryWduz8grg7TYJzdqsYq&_nc_ohc=UmNpXKbkQHQAX9pfhq9&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfC3zGRNNh01ANaF_01kAu_GWsdZg015bP5yLJR25w6U6Q&oe=6388F731" alt="" className='w-32 h-32 rounded-full object-cover object-center ' />
        



<div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>IBEX</h4>
    <p className='font-bold text-2xl mt-1'>WEB DEVELOPER INTERN</p>

<div className='flex space-x-2 m-y-2'>
<img
className='w-10 h-10 rounded-full object-cover object-center'
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLGSUTwygdoIlv68wPXaBzO4PYZVRx5HPpQ&usqp=CAU" alt="" srcset="" />
<img
className='w-10 h-10 rounded-full object-cover object-center'
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLGSUTwygdoIlv68wPXaBzO4PYZVRx5HPpQ&usqp=CAU" alt="" srcset="" />
<img
className='w-10 h-10 rounded-full object-cover object-center'
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLGSUTwygdoIlv68wPXaBzO4PYZVRx5HPpQ&usqp=CAU" alt="" srcset="" />
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