import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
    <div className='grid grid-cols-4 gap-24 mx-20 '>
        <div className='col-span-3'>
            <p className='text-2xl text-gray-300 font-serif my-6'>10,500 websites are created every <span className='text-green-500 underline'><Link href='#'>hour</Link></span> .</p>
            <p className='text-2xl text-gray-300 font-serif my-6'>75% of the time, a website’s credibility is judged based on a website’s overall aesthetics, says a <span className='text-green-500 underline'><Link href='#'>BCS report</Link></span>.</p>
            <p className='text-2xl text-gray-300 font-serif my-6'>When you land on a website, the visitor should be able to easily figure out the information they need without getting confused or frustrated. That's a good user experience with an intuitive user interface.</p>
            <p className='text-2xl text-gray-300 font-serif my-6'>However, the reality is that most websites don’t give the user a good experience. The buttons are misplaced. The text overlaps large images making it hard for the reader to read. Branding overflows the design and the text is illegible – which makes it hard for the reader to understand and connect with the message.</p>
            <div className='mt-24'>
                <p className='text-blue-500 text-4xl font-bold '>What is a user interface layout?</p>
            <p className='text-2xl text-gray-300 font-serif my-6'>A good UI layout arranges how different components such as buttons, menus, text fields, images, and other interactive elements in an organized fashion for the user on a digital platform, such as a website, mobile app, or software application.</p>
            <p className='text-2xl text-gray-300 font-serif my-6'>User interface design is an ever-evolving domain. And as tech and design trends progress, new layout types keep emerging to engage and meet the expectations of the evolving user.</p>
            <p className='text-2xl text-gray-300 font-serif my-6'>Here are 30+ user interface layout types for dynamic design:</p>
            {/* <img src="/30.webp" alt="30 sorces" /> */}
            </div>
        </div>
        <div className='col-span-1 relative '>
            <div className='card card-bordered border-white my-10'>
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>Shoes</h2>
                <p>if a shoes chew the shoes who's shoes do he chose</p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
            </div>
            <div className='card card-bordered border-white'>
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>Shoes</h2>
                <p>if a shoes chew the shoes who's shoes do he chose</p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section2