
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ProductsSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
