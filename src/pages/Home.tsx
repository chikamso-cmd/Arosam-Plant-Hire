import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import Services from '../components/sections/Services';
import MachineryList from '../components/sections/MachineryList';
import Specialties from '../components/sections/Specialties';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import VideoCTA from '../components/sections/VideoCTA';
import Prospecting from '../components/sections/Prospecting';
import Testimonials from '../components/sections/Testimonials';
import Partners from '../components/sections/Partners';
// import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <MachineryList limit={4} />
      <Specialties />
      <WhyChooseUs />
      <VideoCTA />
      <Prospecting />
      <Testimonials />
      <Partners />
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
};

export default Home;
