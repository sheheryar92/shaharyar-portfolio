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
    className='h-screen relative flex justify-center xl:space-y-0 mx-auto items-center flex-col text-center xl:flex-row md:text-left mx-w-[200px] xl:p-10 max-h-screen'>
        <h3 className='uppercase absolute top-24 tracking-[20px]
        text-2xl text-gray-500
        '>skills</h3>
        <h3 className='uppercase text-gray-500 tracking-[13px] text-sm absolute top-36'>hover over a skill for current proficiency</h3>


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