import React from 'react';
import heroImg from '../assets/images/illustration-intro.svg';

const Hero = () => {
   return (
      <section id='hero'>
         {/* -- flex container -- */}
         <div className='container flex flex-col-reverse items-center mt-10 space-y-0 md:flex-row md:space-y-0'>
            {/* -- Info -- */}
            <div className='flex flex-col mt-2 mb-5  space-y-10 md:w-1/2 md:mt-0 md:mb-12'>
               <h1 className='max-w-md text-4xl font-bold text-center text-veryDarkBlue tracking-tight md:text-5xl md:text-left'>
                  Bring everyone together to build better products
               </h1>

               <p className='max-w-sm m-auto text-center text-darkGrayishBlue font-medium md:text-left md:ml-0'>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view
               </p>

               <div className='flex justify-center md:justify-start'>
                  <button className='btn'>Get Started</button>
               </div>
            </div>

            {/* -- Image -- */}
            <div className='md:w-1/2'>
               <img src={heroImg} alt='' />
            </div>
         </div>
      </section>
   );
};

export default Hero;
