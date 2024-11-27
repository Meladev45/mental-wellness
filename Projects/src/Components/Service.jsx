import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../utilis/animation';

const Service = () => {
  return (
    <section id='service' className='bg-[#f7f8fc]'>
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
        variants={fadeIn('up',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
         className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aliquam odit, tenetur velit dicta debitis!lorem5
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, magni!
          </p>
        </motion.div>
        {/* Category services */}
        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>
    <motion.TabList
    variants={fadeIn('up',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
     className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Couple Counselling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>
    </motion.TabList>

    <TabPanel>
    <motion.div
    variants={fadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
     className="flex flex-col md:flex-row gap-8 mt-8">
    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
      <h3 className='text-3xl font-semibold text-primary mb-4 '>Couple Counselling </h3>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et porro totam quas consectetur, obcaecati doloremque. Quaerat, ipsum nesciunt quasi eveniet minima id qui maxime!</p>
      <h4 className='text-xl font-medium text-black mb-4'>Benefit</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={service1} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </motion.div>
    </TabPanel>
    <TabPanel>
    <motion.div
    variants={fadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
     className="flex flex-col md:flex-row gap-8 mt-8">
    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
      <h3 className='text-3xl font-semibold text-primary mb-4 '> Parenting Skills</h3>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et porro totam quas consectetur, obcaecati doloremque. Quaerat, ipsum nesciunt quasi eveniet minima id qui maxime!</p>
      <h4 className='text-xl font-medium text-black mb-4'>Benefit</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={service2} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </motion.div>
    </TabPanel>
    <TabPanel>
    <motion.div
    variants={fadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
     className="flex flex-col md:flex-row gap-8 mt-8">
    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
      <h3 className='text-3xl font-semibold text-primary mb-4 '> Feeling Stuck</h3>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et porro totam quas consectetur, obcaecati doloremque. Quaerat, ipsum nesciunt quasi eveniet minima id qui maxime!</p>
      <h4 className='text-xl font-medium text-black mb-4'>Benefit</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={service3} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </motion.div>
    </TabPanel>
    <TabPanel>
    <motion.div
    variants={fadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
     className="flex flex-col md:flex-row gap-8 mt-8">
    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
      <h3 className='text-3xl font-semibold text-primary mb-4 '> Self-Confidence</h3>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et porro totam quas consectetur, obcaecati doloremque. Quaerat, ipsum nesciunt quasi eveniet minima id qui maxime!</p>
      <h4 className='text-xl font-medium text-black mb-4'>Benefit</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
        <li>Understanding Relationship Dynamics</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={service4} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </motion.div>
    </TabPanel>
  </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Service