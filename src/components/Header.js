import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'


export default function Header() {

  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">    
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className='h-10 w-10 mr-2' />
            <span className='text-xl tracking-tight'>VirtualVR</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (

              <li key={item.index}>
                <a href={item.href}>{item.label}</a>
              </li>

            ))}
          </ul>
          <div className='hidden lg:flex items-center justify-center space-x-12'>
              <a href='#' className='py-2 px-3 rounded-md border'>Sign In</a>
              <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
          </div>
          <div className="lg:hidden md-flex flex-col justify-end">
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu/>}
            </button>
          </div>



        </div>


        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
             <ul className=''>
              {navItems.map((item, index) => (

                <li key={item.index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>

              ))}
            </ul> 
            <div className='items-center justify-center space-x-6 py-4'>
              <a href='#' className='py-2 px-3 rounded-md border'>Sign In</a>
              <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
          </div>
            </div>

          )}

      </div>

    </nav>
  )
}
