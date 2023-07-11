import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
   return (
      <div className='bg-capsule bg-no-repeat bg-[length:140%] bg-[top_-4%_left_-20%]  sm:bg-[length:110%] sm:bg-[top_-5%_left_-85%] md:bg-[length:650px] md:bg-[top_-10%_left_165%] lg:bg-[length:800px] lg:bg-[top_-20%_left_140%] xl:bg-[length:950px] xl:bg-[top_-30%_left_140%] 2xl:bg-[length:1100px] 2xl:bg-[top_-50%_left_130%]'>
         <Navbar />
         <Hero />
         <div className='bg-capsule bg-no-repeat bg-[length:500px] bg-[top_70%_left_-160%] sm:bg-[length:750px] sm:bg-[top_60%_left_-310%] md:bg-[length:650px] md:bg-[top_35%_left_-350%] lg:bg-[length:800px] lg:bg-[top_50%_left_-200%] xl:bg-[length:950px] xl:bg-[top_120%_left_-190%]'>
            <Features />
            <Testimonials />
            <Cta />
         </div>

         <Footer />
      </div>
   );
}

export default App;
