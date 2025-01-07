import React from 'react';
import sisyphusLogo from '../assets/images/sisyphus-logo.png';
import profileImage from '../assets/images/profile-img.png';

const Testimonial = () => {
  return (
    <div className="text-center p-10 font-inter">
      <img 
        src={sisyphusLogo} 
        alt="Sisyphus Logo" 
        className="w-[140.83px] h-[40px] mx-auto mb-4 sm:w-[180px] sm:h-[50px]" // adjust logo size on larger screens
      />
      <h3 className="text-3xl font-bold text-gray-800 max-w-3xl mx-auto mt-5 p-5 mb-6 sm:text-4xl sm:leading-relaxed">
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
      </h3>
      <div className="flex flex-col items-center mt-5 p-5 sm:flex-row sm:items-center sm:justify-center">
        <img 
          src={profileImage} 
          alt="Candice Wu" 
          className="w-14 h-14 rounded-full mb-3 sm:mb-0 sm:w-20 sm:h-20" // larger profile image on bigger screens
        />
        <div className="text-center sm:text-left sm:ml-4">
          <p className="text-lg font-semibold text-gray-800">Candice Wu</p>
          <p className="text-sm text-gray-600">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
