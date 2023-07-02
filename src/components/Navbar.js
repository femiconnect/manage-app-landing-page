import React from 'react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
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
            <button>Get Started</button>
         </div>
      </nav>
   );
};

export default Navbar;
