import React from 'react';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Testimonial from './components/Testimonial';
import FAQ from './components/Faq';

const App = () => (
  <div>
    <Header />
    <Hero />
    <SocialProof />
    <Features />
    <Testimonial />
    <FAQ />
  </div>
);

export default App;
