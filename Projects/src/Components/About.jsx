import React, { useState } from 'react'
import thumb from '../assets/thumb.png'
import {IoPlay} from 'react-icons/io5'
import {IoArrowForwardCircleSharp} from 'react-icons/io5'
import {motion} from 'framer-motion'
import { fadeIn } from '../utilis/animation'

const About = () => {
  const [vid,setvid]=useState(false)

  const handleplay =()=>{
    setvid(true)
  }

  const handlestop =()=>{
    setvid(false)
  }
  return (
    <div id='about' className='bg-[#f7f6fc] pt-16 pb-20'>
       <motion.div
       variants={fadeIn('down',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.7}}
        className="container mx-auto">
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* left side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
          {
           !vid ? (
             <div className='relative'>
              <img src={thumb} alt="thumbnail" className='w-full md:h-[446px] auto rounded-lg object-cover'/>
              <button className='absolute top-1/2 left-1/2  bg-primary p-3 rounded-full shadom-lg cursor-pointer' onClick={handleplay}>
                <IoPlay className='size-12 text-white'/>
              </button>
             </div> 
            ):(
              null
            )
          }
          </div>

          {/* right side */}
          <div className='md:w-1/2 w-full'>
          <h2 className='text-4xl capitalize font-secondary font-bold mb-4 leading-snug'>Individual Consult And Therapy</h2>
         <p className='text-lg mb-12 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better,we improve our focus, and we`re kinder to ourselves. let us walk you through the basics in our new mindful guide on how to meditate</p>
         <button className='bg-primary text-white py-3.5 px-8 font-mdium rounded-md hover:bg-primary/90'>
            <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <IoArrowForwardCircleSharp/>
            </a>
         </button>
          </div>
        </div>

        {
          vid && (
           <div className='fixed  inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
             <div className='relative w-full h-full flex items-center justify-center'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/z4s-6N8f0a4?si=KpjBTVq4qNN1AIg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <button onClick={handlestop} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                x
              </button>
            </div>
           </div>
          )
        }
       </motion.div>
    </div>
  )
}

export default About