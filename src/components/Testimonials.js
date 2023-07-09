import React from 'react';
import testimonialImg1 from '../assets/images/avatar-anisha.png';
import testimonialImg2 from '../assets/images/avatar-richard.png';
import testimonialImg3 from '../assets/images/avatar-shanai.png';

const Testimonials = () => {
   return (
      <section id='testimonials'>
         <div className='container my-14 text-center'>
            {/* -- heading -- */}
            <h2 className='text-4xl font-bold text-center text-veryDarkBlue tracking-tight md:text-5xl '>
               What our clients say about Manage
            </h2>

            {/* -- testimonial container -- */}
            <div className='flex flex-col mt-20 md:flex-row md:space-x-6'>
               {/* -- Testimonial 1 -- */}
               <div className='flex flex-col items-center p-6 space-y-6 rounded-g bg-veryLightGray md:w-1/3'>
                  <img src={testimonialImg1} alt='..' className='w-16 -mt-14' />
                  <h4 className='text-lg font-bold text-veryDarkBlue'>
                     Anisha Li
                  </h4>
                  <p className='text-sm text-darkGrayishBlue'>
                     "Manage has supercharged our team's workflow. The ability
                     to maintain visibility on larger milestones at all times
                     keeps everyone motivated."
                  </p>
               </div>

               {/* -- Testimonial 2 -- */}
               <div className='flex flex-col items-center mt-16 p-6 space-y-6 rounded-g bg-veryLightGray md:w-1/3 md:mt-0'>
                  <img src={testimonialImg2} alt='..' className='w-16 -mt-14' />
                  <h4 className='text-lg font-bold text-veryDarkBlue'>
                     Richard Watts
                  </h4>
                  <p className='text-sm text-darkGrayishBlue'>
                     "We have been able to cancel so many other subscriptions
                     since using Manage. There is no more cross-channel
                     confusion and everyone is much more focused."
                  </p>
               </div>

               {/* -- Testimonial 3 -- */}
               <div className='flex flex-col items-center  mt-16 p-6 space-y-6 rounded-g bg-veryLightGray md:w-1/3 md:mt-0'>
                  <img src={testimonialImg3} alt='..' className='w-16 -mt-14' />
                  <h4 className='text-lg font-bold text-veryDarkBlue'>
                     Ali Bravo
                  </h4>
                  <p className='text-sm text-darkGrayishBlue'>
                     "Manage has supercharged our team's workflow. The ability
                     to maintain visibility on larger milestones at all times
                     keeps everyone motivated."
                  </p>
               </div>
            </div>

            {/* -- CTA button -- */}
            <div className='flex justify-center mt-14'>
               <button className='btn'>Get Started</button>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
