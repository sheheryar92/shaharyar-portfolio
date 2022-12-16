import Head from 'next/head'
import React,{useState} from 'react'
import Education from '../Portfolio/Education'
import Experince from '../Portfolio/Experince'
import Hero from '../Portfolio/Hero'
import Skills from '../Portfolio/Skills'
import { BsMoonStars } from "react-icons/bs";
import Work from '../Portfolio/Work'
import ContactMe from '../Portfolio/ContactMe'

type Props = {}

function index({}: Props) {
  const [darkMode, setDarkMode] = useState(true)


  return (
    <div className={darkMode ? "dark" : ""}>
    <div 
    
    className=' 

 dark:bg-slate-700
px-2
 h-screen 
    overflow-scroll z-0  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    
 text-slate-100


'


    
    >
      <Head>
        <title>sheeryar portfolio</title>
      </Head>
      <main >



{/* nav */}
<nav className='flex justify-between
    items-center
    py-3
    max-w-7xl
    mx-auto
px-2
sticky
z-100000000000
top-0
    '>

<h1 >Sheheryar</h1>

<ul className='flex space-x-4 items-center '>

    <li className='  bg-cyan-500 px-10 py-2 rounded-xl cursor-pointer text-white hover:bg-gradient-to-r from-cyan-900'>Resume</li>
    <li className='cursor-pointer'  ><BsMoonStars 

    size={25}
    className='text-teal-500' onClick={() => setDarkMode(!darkMode) } /></li>
</ul>

    </nav>
{/* nav */}

 <section  ><Hero/></section> 
  <section ><Experince /></section> 
<section ><Work /></section>  
 <section ><Education /></section> 
 <section ><Skills /></section> 
 <section ><ContactMe /></section>  
      </main>
    </div>
    </div>
  )
}

export default index































// import React from 'react'
// import About from '../components/About'
// import ContactMe from '../components/ContactMe'
// import Header from '../components/Header'
// import Hero from '../components/Hero'
// import Projects from '../components/Projects'
// import Skills from '../components/Skills'
// import WorkEperince from '../components/WorkExperince'


// type Props = {}

// function index({}: Props) {
//   return (
//     <div className=' bg-[rgb(36,36,36)] h-screen 
//     overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
//     snap-y 
//     snap-mandatory
    
//  text-slate-100' >



// <Header />




// <section className='snap-start' >


// <Hero  />

// </section>

// <section id='about' className='snap-center'>
//   <About />
// </section>
//       <section  className='snap-center' >
//         <WorkEperince />
//       </section>
// <section className='snap-center'>
//   <Skills />
// </section>

// <section className='snap-center'>
//   <Projects />
// </section>

// <section className='snap-center'>
//   <ContactMe />
// </section>

//     </div>
//   )
// }

// export default index

