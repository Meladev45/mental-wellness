import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../utilis/animation'

const packages = [
    {
      name: 'Bronze Package',
      price: '$99',
      description: 'Ideal for individuals or small businesses looking to get started with mental wellness.',
      features: [
        'Access to basic wellness resources',
        'Weekly mental wellness tips',
        'Community support group access',
      ],
    },
    {
      name: 'Silver Package',
      price: '$199',
      description: 'A great choice for growing businesses with additional features and support for mental wellness.',
      features: [
        'All Bronze Package features',
        'Monthly guided meditation sessions',
        'Personalized wellness plan',
        'Access to expert webinars',
      ],
    },
    {
      name: 'Gold Package',
      price: '$299',
      description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
      features: [
        'All Silver Package features',
        'Weekly one-on-one coaching sessions',
        'Advanced mental wellness tracking tools',
        '24/7 access to mental wellness experts',
      ],
    },
  ]

const Pricing = () => {


  const handleTocontact =()=>{
    const targetElement=document.getElementById('contact')
    if(targetElement){
      window.scrollTo({
        top:targetElement.offsetTop,
        behavior:'smooth',
      })
    }
  }
  return (
    <div className='bg-[#f7f8fc] pt-2' id='pricing'>
      <div className="container mx-auto px-8">
       <motion.div
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='text-center mb-12'>
        <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect for Small & Large Brands</h2>
        <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eos! Perferendis praesentium veritatis facere, aperiam fugit culpa, non voluptates minus ipsa facilis</p>
       </motion.div>

       {/* Package Section */}
       <div
       
        className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 mb-12 pb-12'>
       {
        packages.map((pkg,index)=>{
           return  <motion.div
           variants={fadeIn('right',0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
            key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
           <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
           <hr  className='w-24 border text-primary border-primary'/>
           <p className='text-3xl font-bold mb-4'>{pkg.price} <span className='text-lg font-normal'>/mo</span></p> 
           <p className='text-lg mb-4'>{pkg.description}</p>
           <ul className='list-disc list-inside space-y-2 mb-6'>
            {
              pkg.features.map((feature,idx)=>{
                return <li key={idx} className=''>
                  {feature}
                </li>
              })
            }
           </ul>
           <button
           onClick={handleTocontact}
            className='bg-primary text-white px-4 py-2 rounded'>Get Started</button>
         </motion.div>
        })
         }
       </div>
      </div>
    </div>
  )
}

export default Pricing