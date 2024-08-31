import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black pt-16 mt-8'>
        <footer className="bg-black text-white py-10">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8">
    <div className="lg:col-span-2 space-y-4 ml-16">
    <a className=" text-xl font-bold">Dev<span className='font-normal'>Squad</span></a>      
    <p>Cloned in 3hrs</p>
      <p className="flex items-center space-x-2">
        
        <span>+91 8904014600</span>
      </p>
      <p className="flex items-center space-x-2">
        <span>info@devsquad.com</span>
      </p>
    </div>

    {/* <!-- Column 2: Company Links --> */}
    <div className="space-y-2">
      <h5 className="font-bold">Company</h5>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">How We Work</a></li>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Success Stories</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
      </ul>
    </div>

    {/* <!-- Column 3: Engagement Models --> */}
    <div className="space-y-2">
      <h5 className="font-bold">Engagement Models</h5>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Dedicated Development Squad</a></li>
        <li><a href="#" className="hover:underline">Product Strategy and Design</a></li>
      </ul>
    </div>

    {/* <!-- Column 4: Services --> */}
    <div className="space-y-2">
      <h5 className="font-bold">Services</h5>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">SaaS App Development</a></li>
        <li><a href="#" className="hover:underline">Mobile App Development</a></li>
        <li><a href="#" className="hover:underline">Web App Development</a></li>
        <li><a href="#" className="hover:underline">Custom Software</a></li>
        <li><a href="#" className="hover:underline">MVP Development</a></li>
      </ul>
    </div>

    {/* <!-- Column 5: Technologies --> */}
    <div className="space-y-2">
      <h5 className="font-bold">Technologies</h5>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Laravel</a></li>
        <li><a href="#" className="hover:underline">Vue.js</a></li>
        <li><a href="#" className="hover:underline">Node.js</a></li>
        <li><a href="#" className="hover:underline">React</a></li>
        <li><a href="#" className="hover:underline">React Native</a></li>
        <li><a href="#" className="hover:underline">Electron</a></li>
      </ul>
    </div>
  </div>
  <div className="mt-8 text-center text-gray-400">
  <hr />
    <h6 className='mt-4'>© 2024. All rights reserved.</h6>
    
  </div>
</footer>

    </div>
  )
}

export default Footer