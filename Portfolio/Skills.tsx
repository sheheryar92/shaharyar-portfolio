import React from 'react'
import { motion } from "framer-motion"
import SkillGrid from './SkillGrid'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='min-h-screen max-w-7xl mx-auto  items-center  space-y-1   px-2  p-2 text-center
    flex  
       justify-evenly 
    flex-col'>
    <h1 className="text-teal-500 tracking-[20px] 
          uppercase  font-semibold text-2xl md:text-5xl animate-pulse">
       Skills
        </h1>
        <h3 className='uppercase  tracking-[13px] text-sm 
        text-gray-500 dark:text-white
        '>hover over a skill for current proficiency</h3>


<div className='grid grid-cols-4 gap-5'>
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
    <SkillGrid />
</div>


    </motion.div>
  )
}

export default Skills
