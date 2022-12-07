import React from 'react'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkEperince from '../components/WorkExperince'


type Props = {}

function index({}: Props) {
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

export default index