import React from 'react';
import logoWhite from '../assets/images/logo-white.svg';
import facebook from '../assets/images/icon-facebook.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <footer className='bg-gray-800'>
         {/* -- flex container -- */}
         <div className='container flex flex-col-reverse justify-between py-10 space-y-8 md:flex-row  md:space-y-0'>
            {/* --rights reserved */}
            <div className='text-gray-400 text-sm text-center md:hidden'>
               copyright {year}. All Rights Reserved
            </div>

            {/* -- logo and social links container -- */}
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0'>
               {/* logo */}
               <div className='my-12 md:mt-0'>
                  <img src={logoWhite} alt='' className='h-6' />
               </div>

               {/* social links container */}
               <div className='flex justify-center space-x-7 md:space-x-4'>
                  <a href='/'>
                     <img src={facebook} alt='' className='h-7 md:h-5' />
                  </a>
                  <a href='/'>
                     <img src={youtube} alt='' className='h-7 md:h-5' />
                  </a>
                  <a href='/'>
                     <img src={twitter} alt='' className='h-7 md:h-5' />
                  </a>
                  <a href='/'>
                     <img src={pinterest} alt='' className='h-7 md:h-5' />
                  </a>
                  <a href='/'>
                     <img src={instagram} alt='' className='h-7 md:h-5' />
                  </a>
               </div>
            </div>

            {/* -- menu links container -- */}
            <div className='flex justify-around items-start space-x-32'>
               <div className='flex flex-col space-y-3 text-white'>
                  <a href='/' className='hover:text-brightRed'>
                     Home
                  </a>
                  <a href='/' className='hover:text-brightRed'>
                     Pricing
                  </a>
                  <a href='/' className='hover:text-brightRed'>
                     Products
                  </a>
                  <a href='/' className='hover:text-brightRed'>
                     About Us
                  </a>
               </div>

               <div className='flex flex-col space-y-3 text-white'>
                  <a href='/' className='hover:text-brightRed'>
                     Careers
                  </a>
                  <a href='/' className='hover:text-brightRed'>
                     Community
                  </a>
                  <a href='/' className='hover:text-brightRed'>
                     privacy Policy
                  </a>
               </div>
            </div>

            {/* -- subscription form and copyright -- */}
            <div className='flex flex-col justify-between'>
               <form class='flex space-x-3'>
                  <input
                     type='text'
                     className='flex-1 px-4 rounded-full focus:outline-none'
                     placeholder='Updated in your inbox'
                  />
                  <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                     Go
                  </button>
               </form>

               <div className='hidden text-gray-400 text-sm md:block'>
                  copyright {year}. All Rights Reserved
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
