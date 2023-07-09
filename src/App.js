import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <Features />
         <Testimonials />
         <Cta />
      </>
   );
}

export default App;
