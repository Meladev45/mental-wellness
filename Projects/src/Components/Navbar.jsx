import React, { useEffect, useState } from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [isopen,setisopen]=useState(false)
    const [activesec,setactivesec]=useState('home')


    const handletoggle=()=>{
        setisopen(!isopen)
    }

    const handlemenu =()=>{
      setisopen(false)
    }
    // scroll function
    
    const handlscroll=()=>{
        const sections =['home','about','service','pricing','testimonial']
        const scrollposition =window.scrollY + 100;

        sections.forEach(section =>{
            const element = document.getElementById(section)
            if(element){
                const offsetTop =element.offsetTop;
                const height = element.offsetHeight;
                if(scrollposition>=offsetTop && scrollposition < offsetTop + height){
                    setactivesec(section)
                }
            }
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll',handlscroll);
        return()=>window.removeEventListener('scroll',handlscroll)
    },[]);

    const handleScrollTo =(targetId)=>{
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            window.scrollTo({
                top:targetElement.offsetTop,
                behavior:'smooth'
            })
        }
    }
// END 
    
    const navlinks =(
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-y-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={(e)=>{
                    e.preventDefault();
                    handlemenu()
                    handleScrollTo('home')
                }}
                 href="#home" className={`text-white ${activesec==='home'?'isActive':''}`}>Home</motion.a>
            </li>

            <li>
                <motion.a
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 onClick={(e)=>{
                     e.preventDefault();
                     handlemenu()
                     handleScrollTo('about')
                 }}
                 href="#about" className={`text-white ${activesec==='about'?'isActive':''}`}>About Us</motion.a>
            </li>

            <li>
                <motion.a
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 onClick={(e)=>{
                     e.preventDefault();
                     handlemenu()
                     handleScrollTo('service')
                 }}
                 href="#service" className={`text-white ${activesec==='service'?'isActive':''}`}>Services</motion.a>
            </li>

            <li>
                <motion.a
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 onClick={(e)=>{
                     e.preventDefault();
                     handlemenu()
                     handleScrollTo('pricing')
                 }}
                 href="#pricing" className={`text-white ${activesec==='pricing'?'isActive':''}`}>Pricing</motion.a>
            </li>

            <li>
                <motion.a
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 onClick={(e)=>{
                     e.preventDefault();
                     handlemenu()
                     handleScrollTo('testi')
                 }}
                 href="#testi" className={`text-white ${activesec==='testi'?'isActive':''}`}>Testimonial</motion.a>
            </li>
        </ul>
    )
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center w-full'>
             {/* logo */}
             <div>
                <a href="">
                    <img src="/logo.svg" alt="logo" />
                </a>
             </div>

             {/* navitems */}
             <div className='hidden md:flex flex-grow justify-center'>
                <nav>
               {navlinks}
                </nav>
             </div>

             {/* button */}
             <div className='hidden md:block'>
             <a
              onClick={(e)=>{
                e.preventDefault()
                handlemenu()
                handleScrollTo('contact')
             }} 
              href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>Contact</a>
             </div>
             {/* Hamburger menu */}
             <div className='block md:hidden'>
                <button className={`text-white focus:outline-none ${isopen ?'border border-white':''}`}
                onClick={handletoggle} 
                >
                    <HiOutlineMenuAlt3 className='size-6'/>
                </button>
             </div>
        </div>
        {/* Moblie navitems */}

        {
            isopen&& (
                <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden pb-4'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navlinks.props.children}
                        <li className='list-none py-2'><a href="#contact"
                         onClick={(e)=>{
                            e.preventDefault()
                            handlemenu()
                            handleScrollTo('contact')
                         }} 
                         className='text-white bg-primary hover:bg-primary/90 px-3 py-2 rounded' >Contact Us</a></li>
                    </ul>
                   
                </nav>
            )
        }
    </header>
  )
}

export default Navbar