import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-black bg-opacity-95 fixed top-0 left-0 right-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href='/home'>Home</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Dev<span className='font-normal'>Squad</span></a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-5 text-lg ">
      <li className="border border-transparent rounded-lg hover:border-gray-100 "><Link href="#">What we do</Link></li>
      <li className="border border-transparent rounded-lg hover:border-gray-100 "><Link href='#'>How we Work</Link></li>
      <li className="border border-transparent rounded-lg hover:border-gray-100 "><Link href='#'>About us</Link></li>
      <li className="border border-transparent rounded-lg hover:border-gray-100 "><Link href='#'>Success Stories</Link></li>
      <li className="border border-transparent rounded-lg hover:border-gray-100 "><Link href='#'>Blog</Link></li>
      

      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link href='/contact'>Contact</Link></li> */}

    </ul>
  </div>
  <div className="navbar-end mr-10">
    <a className="btn text-lg">Log in </a>
  </div>
</div>
  )
}


export default Navbar