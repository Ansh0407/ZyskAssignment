import React from 'react';
import demoButton from '../assets/images/demo.png';
import signupButton from '../assets/images/signup.png';
import onboarding from '../assets/images/img.png';

const Hero = () => (
  <section className="text-center py-16 bg-white">
    {/* Announcement Banner */}
    <div className="inline-flex justify-center mb-8 border border-red-200 bg-[rgba(230,63,58,0.03)] rounded-full py-1 px-2">
      <span className="border border-red-200 text-red-600 text-xs md:text-sm font-medium py-1 px-2 rounded-full">
        New feature
      </span>
      <a
        href="/team-dashboard"
        className="ml-2 text-red-600 font-medium text-xs md:text-sm flex items-center"
      >
        Check out the team dashboard →
      </a>
    </div>

    {/* Title */}
    <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 px-4">
      Beautiful analytics to grow smarter
    </h2>

    {/* Subtitle */}
    <p className="text-gray-600 mb-10 md:mb-12 text-sm md:text-base max-w-md md:max-w-xl mx-auto px-4">
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center items-center gap-4">
      <button
        className="w-32 md:w-36 h-10 md:h-12 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${demoButton})`,
        }}
        aria-label="Demo"
      ></button>

      <button
        className="w-32 md:w-36 h-10 md:h-12 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${signupButton})`,
        }}
        aria-label="Sign up"
      ></button>
    </div>

    {/* Image Section */}
    <div className="flex justify-center items-center mt-8 md:mt-12 px-4">
      <img
        src={onboarding}
        alt="Testmyskills Onboarding"
        className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] h-auto object-cover rounded-lg"
      />
    </div>
  </section>
);

export default Hero;
