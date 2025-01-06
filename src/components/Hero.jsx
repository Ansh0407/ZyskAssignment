import React from 'react';
import demoButton from '../assets/images/demo.png';
import signupButton from '../assets/images/signup.png';
import onboarding from '../assets/images/img.png';

const Hero = () => (
  <section className="text-center py-20 bg-white">
    <div className="inline-flex justify-center mb-8 border border-red-200 bg-[rgba(230,63,58,0.03)] rounded-full py-1 px-1">
      <span className="border border-red-200 text-red-600 text-sm font-medium py-1 px-1 rounded-full">
        New feature
      </span>
      <a href="/team-dashboard" className="ml-2 text-red-600 font-medium text-sm flex items-center">
        Check out the team dashboard →
      </a>
    </div>

    <h2 className="text-4xl font-bold mb-8">Beautiful analytics to grow smarter</h2>

    <p className="text-gray-600 mb-12 max-w-xl mx-auto">
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
    </p>

    {/* Buttons */}
    <div className="flex justify-center items-center">
      <button
        className="w-36 h-12 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${demoButton})`,
        }}
        aria-label="Demo"
      ></button>

      <button
        className="w-36 h-12 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${signupButton})`,
        }}
        aria-label="Sign up"
      ></button>
    </div>

    {/* Card Section */}
    <div className="flex justify-center items-center mt-12">
      <img
        src={onboarding}
        alt="Testmyskills Onboarding"
        className="w-[1280px] h-[560px] object-cover rounded-lg"
      />
    </div>
  </section>
);

export default Hero;
