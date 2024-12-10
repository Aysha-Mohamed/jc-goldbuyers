import React from 'react';
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroCarousel.tsx';
import AboutSection from './components/AboutSection.tsx';
import ParallaxSection from './components/ParallaxSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import AdditionalServices from './components/AdditionalServices.tsx';
import InvestmentSection from './components/InvestmentSection.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen pt-36">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ParallaxSection />
      <ServicesSection />
      <AdditionalServices />
      <InvestmentSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;