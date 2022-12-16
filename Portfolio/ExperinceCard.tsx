import React from 'react'
import CompanyLogo from '../public/ibex.jpg'
import Image from 'next/image'
type Props = {}

function ExperinceCard({}: Props) {
  return (

        <div className='py-10 px-20  
        bg-[#F7AB0A]/80
        dark:bg-white
        dark:text-gray-500
 
        rounded-xl shadow-lg flex justify-center flex-col text-center '>
<Image alt='' src={CompanyLogo} className="h-20 w-20 rounded-full m-auto" />
<h3 className='py-2 text-lg font-medium mt-8 text-gray-500'>Ibex Global</h3>
<div className='py-5 text-teal-500 text-lg'>
    <h4>skills</h4>
</div>
<ul className='list-disc text-gray-500'>
    <li className='py-1 '>worked on react lor</li>
    <li className='py-1  '>worked on react</li>
    <li className='py-1  '>worked on react</li>
    <li className='py-1 '  >worked on react</li>
</ul>
</div>


  )
}

export default ExperinceCard