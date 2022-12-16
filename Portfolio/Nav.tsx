import React from 'react'
import { BsMoonStars, BsList } from "react-icons/bs";

type Props = {}

function Nav({}: Props) {

  return (

    <nav className='flex justify-between
    items-center
    py-3
    max-w-7xl
    mx-auto
px-2
sticky
z-10
top-0
    '>

<h1 >Sheheryar</h1>

<ul className='flex space-x-4 items-center '>

    <li className='  bg-cyan-500 px-10 py-2 rounded-xl cursor-pointer text-white hover:bg-gradient-to-r from-cyan-900'>Resume</li>
    <li className='cursor-pointer'  ><BsMoonStars color='red' /></li>
</ul>

    </nav>

  )
}

export default Nav