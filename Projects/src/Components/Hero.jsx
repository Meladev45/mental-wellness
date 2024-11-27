import React from 'react'
import heroimg from '../assets/hero.png'
import {IoArrowForwardCircleSharp} from 'react-icons/io5'
import {motion} from 'framer-motion'
import { fadeIn } from '../utilis/animation'

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
     <div className='container max-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* left side */}
        <motion.div
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
         className='md:w-1/2'>
         <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental Wellness</h1>
         <p className='text-lg mb-12 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better,we improve our focus, and we`re kinder to ourselves. let us walk you through the basics in our new mindful guide on how to meditate</p>
         <button className='bg-primary text-white py-3.5 px-8 font-mdium rounded-md hover:bg-primary/90'>
            <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <IoArrowForwardCircleSharp/>
            </a>
         </button>
        </motion.div>
        {/* Right side */}
        <motion.div
        variants={fadeIn('left',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
         className="md:w-1/2 h-full">
        <img src={heroimg} alt="hero" /></motion.div>
     </div>
    </section>
  )
}

export default Hero