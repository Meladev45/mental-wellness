import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Service from './Components/Service'
import Testimonial from './Components/Testimonial'
import Work from './Components/Work'

function App() {
 
  return (
   <div className='font-primary overflow-x-hidden'>
     <Navbar/>
     <Hero/>
     <About/>
     <Work/>
     <Service/>
     <Pricing/>
     <Testimonial/>
     <Contact/>
     <Footer/>
   </div>
  )
}

export default App
