// App.jsx
import React, { useState, useEffect } from 'react';
import Header from '../component/header/Header';
import Hero from '../component/hero/Hero';
import Services from '../component/Services/Services';
import WhyChooseUs from '../component/WhyChooseUs/WhyChooseUs';
import About from '../component/About/About';
import MissionVision from '../component/MissionVision/MissionVision';
import Contact from '../component/Contact/Contact';
import Footer from '../component/Footer/Footer';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <MissionVision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;


