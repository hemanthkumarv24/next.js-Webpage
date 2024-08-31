import Navbar from '@/app/navbar/page'
import React from 'react'
import Section2 from './section2'
import Footer from './footer'
// import image from '../../public/image.png'

const Home = () => {
  return (
    <><Navbar />
    <div className='mx-24 mt-40 grid grid-cols-2 h-screen' >
      <div className='text-6xl text-blue-500 font-extrabold'>
      30 User Interface Layouts Used in UI Design
      <div className='mt-20 flex items-center'>
        <img src="/hk1.jpg" alt="hk_image" className='w-12 h-12 mx-5 rounded-3xl'/>
        <span className='text-xl text-white'>Hemanth Kumar v  {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} UX</span>
      </div>
      </div>
      <div>
        <img src="/image.png" alt="image" className='rounded'/>
      </div>
    </div>
    <Section2/>
    <Footer/>
    </>
  )
}

export default Home