import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav(!nav);
   };

   return (
      <nav className='container py-6'>
         {/* -- Flex container -- */}
         <div className='flex justify-between items-center'>
            {/* -- Logo -- */}
            <div className='md:max-w-[120px] lg:max-w-[145px]'>
               <img src={logo} alt='' className='w-full' />
            </div>

            {/* --menu items -- */}
            <ul className='hidden  font-semibold md:flex md:space-x-6 md:text-sm lg:space-x-8 lg-text-base'>
               <li className='hover:text-darkGrayishBlue cursor-pointer'>
                  Pricing
               </li>
               <li className='hover:text-darkGrayishBlue cursor-pointer'>
                  Product
               </li>
               <li className='hover:text-darkGrayishBlue cursor-pointer'>
                  About Us
               </li>
               <li className='hover:text-darkGrayishBlue cursor-pointer'>
                  Careers
               </li>
               <li className='hover:text-darkGrayishBlue cursor-pointer'>
                  Community
               </li>
            </ul>

            {/* --nav button -- */}
            <button className='hidden md:block md:btn'>Get Started</button>

            {/* -- Mobile Navbar -- */}

            {/* --hamburger-- */}
            <button
               onClick={handleNav}
               className='block relative w-6 h-6 transition-all cursor-pointer z-10 focus:outline-none md:hidden'
            >
               <span
                  className={
                     nav
                        ? 'absolute top-0 left-0 w-6 h-[2px] bg-white delay-300'
                        : 'absolute top-0 left-0 w-6 h-[2px] bg-gray-900 delay-300'
                  }
               ></span>
               <span
                  className={
                     nav
                        ? 'absolute top-0 left-0 w-6 h-[2px] bg-white translate-y-[7px] delay-300'
                        : 'absolute top-0 left-0 w-6 h-[2px] bg-gray-900 translate-y-[7px] delay-300'
                  }
               ></span>
               <span
                  className={
                     nav
                        ? 'absolute top-0 left-0 w-6 h-[2px] bg-white translate-y-[14px] delay-300'
                        : 'absolute top-0 left-0 w-6 h-[2px] bg-gray-900 translate-y-[14px] delay-300'
                  }
               ></span>
            </button>

            {/* -- mobile menu -- */}
            <div
               onClick={handleNav}
               className={
                  nav
                     ? 'overflow-y-hidden fixed left-0 top-0 w-full h-screen bg-black/95 px-4 py-7 flex flex-col text-gray-300 font-bold ease duration-300 md:hidden'
                     : 'fixed top-0 left-[-100%] h-screen ease duration-300'
               }
            >
               <ul className='w-full h-full flex flex-col justify-center items-center space-y-10'>
                  <li className='hover:text-brightRed cursor-pointer'>
                     Pricing
                  </li>
                  <li className='hover:text-brightRed cursor-pointer'>
                     Product
                  </li>
                  <li className='hover:text-brightRed cursor-pointer'>
                     About Us
                  </li>
                  <li className='hover:text-brightRed cursor-pointer'>
                     Careers
                  </li>
                  <li className='hover:text-brightRed cursor-pointer'>
                     Community
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
