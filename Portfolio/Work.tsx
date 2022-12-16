import Image from 'next/image'
import React from 'react'
import C from '../public/c.png'

type Props = {}

function Work({}: Props) {
  return (
    <div className="min-h-screen items-center flex flex-col
    justify-evenly max-w-7xl mx-auto px-5 md:px-0
    space-y-10
    ">

<h1
        className="text-teal-500 tracking-[20px] 
  
        text-2xl md:text-5xl
          uppercase  font-semibold  animate-pulse"
      >
     PORTFOLIO WORK

      </h1>

      <div className="flex flex-col space-y-5  
      md:mt-0 md:space-y-0
      md:flex-row w-full justify-evenly   ">


{/* card work */}
   <div className='
   bg-[#F7AB0A]/80
        rounded-xl shadow-lg items-center text-center 
        dark:bg-white
        dark:text-gray-500
        bg-slate-400 p-2 hover:transition-all '>
    <Image alt='' src={C} className="w-[100%] h-64 
  text-center
  m-auto
    object-cover"/>
    <h1 className='mt-2 mb-2'>React - Tailwind</h1>
    <ul className='ml-8 list-disc space-y-1 text-left'>
      <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione dolorum ducimus, commodi magni aspernatur quaerat accusantium error provident beatae dignissimos autem soluta officiis! Omnis, beatae doloribus? Ad, ipsum fugit!</li>
      <li>a</li>
      <li>a</li>
    </ul>
   </div>
{/* card work */}
{/* card work */}
<div className='
bg-[#F7AB0A]/80
        rounded-xl shadow-lg items-center text-center 
        dark:bg-white
        dark:text-gray-500
        bg-slate-400 p-2 hover:transition-all '>
    <Image alt='' src={C} className="w-[100%] h-64 
  text-center
  m-auto
    object-cover"/>
    <h1 className='mt-2 mb-2'>React - Tailwind</h1>
    <ul className='ml-8 list-disc space-y-1 text-left'>
      <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione dolorum ducimus, commodi magni aspernatur quaerat accusantium error provident beatae dignissimos autem soluta officiis! Omnis, beatae doloribus? Ad, ipsum fugit!</li>
      <li>a</li>
      <li>a</li>
    </ul>
   </div>
{/* card work */}

{/* card work */}
<div className='
bg-[#F7AB0A]/80
  dark:bg-white
  dark:text-gray-500
        rounded-xl shadow-lg items-center text-center bg-slate-400 p-2 hover:transition-all '>
    <Image alt='' src={C} className="w-[100%] h-64 
  text-center
  m-auto
    object-cover"/>
    <h1 className='mt-2 mb-2'>React - Tailwind</h1>
    <ul className='ml-8 list-disc space-y-1 text-left '>
      <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione dolorum ducimus, commodi magni aspernatur quaerat accusantium error provident beatae dignissimos autem soluta officiis! Omnis, beatae doloribus? Ad, ipsum fugit!</li>
      <li>a</li>
      <li>a</li>
    </ul>
   </div>
{/* card work */}
    </div>
    </div>
  )
}

export default Work