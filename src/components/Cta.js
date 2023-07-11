import React from 'react';

const Cta = () => {
   return (
      <section
         id='cta'
         className='bg-brightRed bg-ctaBgMobile bg-no-repeat bg-[length:20%] bg-[top_70%_left_0%] md:bg-ctaBgLarge md:bg-[length:90%] md:bg-[top_70%_left_0%]'
      >
         {/* -- flex container -- */}
         <div className='container flex flex-col items-center py-12 space-y-12 md:flex-row md:justify-between md:space-y-0'>
            <h2 className='text-4xl text-center text-white font-bold tracking-tight leading-tight md:text-4xl md:max-w-xl md:text-left'>
               Simplify how your team works today
            </h2>
            <button className='btn bg-white text-brightRed font-semibold hover:bg-gray-800 hover:text-white'>
               Get Started
            </button>
         </div>
      </section>
   );
};

export default Cta;
