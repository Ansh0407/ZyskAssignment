import React from 'react';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Testimonial from './components/Testimonial';
import FAQ from './components/Faq';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <Hero />
    <SocialProof />
    <Features />
    <Testimonial />
    <FAQ />
    <Blog />
    <CTA />
    <Footer />
  </div>
);

export default App;
