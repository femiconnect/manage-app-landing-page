import React from 'react';
import { useState } from 'react';
import testimonialImg1 from '../assets/images/avatar-anisha.png';
import testimonialImg2 from '../assets/images/avatar-richard.png';
import testimonialImg3 from '../assets/images/avatar-shanai.png';
import { GoDot, GoDotFill } from 'react-icons/go';

const Slider = () => {
   const testimonials = [
      {
         avatar: testimonialImg1,
         userName: 'Anisha Li',
         testimony:
            "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      },
      {
         avatar: testimonialImg2,
         userName: 'Richard Watts',
         testimony:
            'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
      },
      {
         avatar: testimonialImg3,
         userName: 'Ali Bravo',
         testimony:
            "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0; //returns true/false
      const newIndex = isFirstSlide
         ? testimonials.length - 1
         : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const NextSlide = () => {
      const isLastSlide = currentIndex === testimonials.length - 1; //returns true/false
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
   };

   return (
      <div className='w-full'>
         {/* slide */}
         <div className='flex flex-col items-center p-6 space-y-6 rounded-g bg-veryLightGray'>
            <img
               src={testimonials[currentIndex].avatar}
               alt='..'
               className='w-16 -mt-14'
            />
            <h4 className='text-lg font-bold text-veryDarkBlue'>
               {testimonials[currentIndex].userName}
            </h4>
            <p className='text-sm text-darkGrayishBlue'>
               {testimonials[currentIndex].testimony}
            </p>
         </div>

         {/* dots */}
         <div className='container flex mt-1 justify-center py-2'>
            {testimonials.map((slide, slideIndex) => (
               <div
                  className='text-2xl cursor-pointer text-brightRed'
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
               >
                  {slideIndex === currentIndex ? <GoDotFill /> : <GoDot />}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Slider;
