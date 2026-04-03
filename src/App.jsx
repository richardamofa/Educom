import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AccessSection from './components/AccessSection/AccessSection';
import Courses from './components/Courses/Courses';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <AccessSection />
      <Courses />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
