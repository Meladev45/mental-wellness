import React, { useState } from 'react'
import {FaEnvelope, FaGlobe, FaPhone, FaUserAlt} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { fadeIn } from '../utilis/animation'

const Contact = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [country,setcountry]=useState('')
    const [message,setmessage]=useState('')
    const [showmodal,setshowmodal]=useState(false)

    const handlesubmit =(e)=>{
        e.preventDefault();
        const data ={
            name,email,phone,country,message
        }
       if(!data){
        alert('please fill all fields')
        return;
       }
       setshowmodal(true)
    }
    const closemodal =()=>{
        setshowmodal(false)
        setname('')
        setemail('')
        setphone('')
        setcountry('')
        setmessage('')
    }
  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
       <div className="container mx-auto">
        <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-white'>
      {/* Left Side */}
      <motion.div 
      variants={fadeIn('right',0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}}
      className='space-y-8'>
     <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
        <div className='flex items-start gap-4'>
            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaUserAlt className='text-primary'/>
            </div>
            <div className='space-y-1'>
                <h3 className='text-lg font-medium'>24 Hours Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adip.</p>
            </div>
        </div>

        <div className='flex items-start gap-4'>
            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaEnvelope className='text-primary'/>
            </div>
            <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Expert Therapist</h3>
                <p>Lorem ipsum dolor sit amet consectetur adi</p>
            </div>
        </div>

        <div className='flex items-start gap-4'>
            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaPhone className='text-primary'/>
            </div>
            <div className='space-y-1'>
                <h3 className='text-lg font-medium'>High Quality Care</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className='flex items-start gap-4'>
            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaGlobe className='text-primary'/>
            </div>
            <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipihfd.</p>
            </div>
        </div>
     </div>
      </motion.div>
{/* Right Side */}
      <motion.div
       variants={fadeIn('left',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.7}}
       className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
       <h3 className='text-2xl font-bold mb-4'>Book an Appointment</h3>

       <form onSubmit={handlesubmit} className='space-y-8'>
         <div className='flex sm:flex-row flex-col gap-4'>
         <input onChange={e =>setname(e.target.value)} type="text" placeholder='Name' className='w-full p-4 rounded-md focus outline-none focus:ring-2 focus:ring-primary shadow text-gray-500'/>
            <input onChange={e =>setemail(e.target.value)} type="email" placeholder='Email address' className='w-full p-4 rounded-md focus outline-none focus:ring-2 focus:ring-primary shadow text-gray-500'/>
         </div>
         <div className='flex sm:flex-row flex-col gap-4'>
            <input onChange={e =>setphone(e.target.value)} type="tel" placeholder='Contact number' className='w-full p-4 rounded-md focus outline-none focus:ring-2 focus:ring-primary shadow text-gray-500'/>
            <input onChange={e =>setcountry(e.target.value)} type="text" placeholder='Country' className='w-full p-4 rounded-md focus outline-none focus:ring-2 focus:ring-primary shadow text-gray-500'/>
         </div>
         <textarea
         rows='5'

          placeholder='Write your message' className='w-full p-4 rounded-md focus outline-none focus:ring-2 focus:ring-primary shadow text-gray-500'></textarea>
          <button
          type='submit'
          className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90' 
          >Send Message</button>
       </form>
      </motion.div>
        </div>
       </div>

       {
        showmodal&&(
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
                <div className='bg-white p-8 rounded-md shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4'>Thank you!</h2>
                    <p>Thank you,{name}, for submitting your query</p>
                    <button onClick={closemodal} className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>close</button>
                </div>
            </div>
        )
       }
    </div>
  )
}

export default Contact