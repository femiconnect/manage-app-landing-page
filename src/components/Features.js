import React from 'react';

const Features = () => {
   return (
      <section id='features'>
         {/* --flex container -- */}
         <div className='container flex flex-col mt-10 space-y-12 md:space-y-0 md:flex-row'>
            {/* -- what's different -- */}
            <div className='flex flex-col space-y-12 md:w-1/2'>
               <h2 className='max-w-md text-4xl font-bold text-center text-veryDarkBlue tracking-tight md:text-left'>
                  What's different about Manage?
               </h2>
               <p className='max-w-md m-auto text-center text-darkGrayishBlue font-medium  md:max-w-xs  md:text-left md:ml-0 lg:max-w-md'>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
               </p>
            </div>

            {/* -- numbered list -- */}
            <div className='flex flex-col space-y-8 md:w-1/2'>
               {/* -- item 1 -- */}
               <div className='flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6'>
                  <div className='hidden md:inline-block md:h-[35px] md:rounded-full md:bg-brightRed md:px-4 md:py-1.5 md:text-white md:font-semibold'>
                     01
                  </div>
                  <div>
                     <h1 className='hidden md:inline-block md:text-veryDarkBlue md:font-bold md:text-xl'>
                        Track company-wide progress
                     </h1>
                     <div className='rounded-l-full bg-brightRedSupLight w-full flex items-center space-x-2 md:hidden'>
                        <p className='rounded-full bg-brightRed px-4 py-1.5 text-white font-semibold'>
                           01
                        </p>
                        <h1 className='font-bold text-veryDarkBlue'>
                           Track company-wide progress
                        </h1>
                     </div>
                     <p className='mt-2.5 text-darkGrayishBlue md:mt-4'>
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress ar the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                     </p>
                  </div>
               </div>

               {/* -- item 2 -- */}
               <div className='flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6'>
                  <div className='hidden md:inline-block md:h-[35px] md:rounded-full md:bg-brightRed md:px-4 md:py-1.5 md:text-white md:font-semibold'>
                     02
                  </div>
                  <div>
                     <h1 className='hidden md:inline-block md:text-veryDarkBlue md:font-bold md:text-xl'>
                        Advanced built-in reports
                     </h1>
                     <div className='rounded-l-full bg-brightRedSupLight w-full flex items-center space-x-2 md:hidden'>
                        <p className='rounded-full bg-brightRed px-4 py-1.5 text-white font-semibold'>
                           02
                        </p>
                        <h1 className='font-bold text-veryDarkBlue'>
                           Advanced built-in reports
                        </h1>
                     </div>
                     <p className='mt-2.5 text-darkGrayishBlue md:mt-4'>
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                     </p>
                  </div>
               </div>

               {/* -- item 3 -- */}
               <div className='flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6'>
                  <div className='hidden md:inline-block md:h-[35px] md:rounded-full md:bg-brightRed md:px-4 md:py-1.5 md:text-white md:font-semibold'>
                     03
                  </div>
                  <div>
                     <h1 className='hidden md:inline-block md:text-veryDarkBlue md:font-bold md:text-xl'>
                        Everything you need in one place
                     </h1>
                     <div className='rounded-l-full bg-brightRedSupLight w-full flex items-center space-x-2 md:hidden'>
                        <p className='rounded-full bg-brightRed px-4 py-1.5 text-white font-semibold'>
                           03
                        </p>
                        <h1 className='font-bold text-veryDarkBlue'>
                           Everything you need in one place
                        </h1>
                     </div>
                     <p className='mt-2.5 text-darkGrayishBlue md:mt-4'>
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
