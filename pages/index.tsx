import React from 'react'
import About from '../component/About'
import ContactMe from '../component/ContactMe'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Projects from '../component/Projects'
import Skills from '../component/Skills'
import WorkEperince from '../component/WorkExperince'

type Props = {}

export default function index({}: Props) {
  return (
    <div className=' bg-[rgb(36,36,36)] h-screen 
    overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    snap-y 
    snap-mandatory
    
 text-slate-100' >



<Header />




<section className='snap-start' >


<Hero  />

</section>

<section className='snap-center'>
  <About />
</section>
      <section  className='snap-center' >
        <WorkEperince />
      </section>
<section className='snap-center'>
  <Skills />
</section>

<section className='snap-center'>
  <Projects />
</section>

<section className='snap-center'>
  <ContactMe />
</section>

    </div>
  )
}