import React from 'react';
import sisyphusLogo from '../assets/images/sisyphus-logo.png';
import profileImage from '../assets/images/profile-img.png';

const Testimonial = () => {
  return (
    <div className="text-center p-10 font-inter">
      <img src={sisyphusLogo} alt="Sisyphus Logo" className="w-[140.83px] h-[40px] mx-auto mb-4" />
      <h3 className="text-3xl font-bold text-gray-800 max-w-3xl  mt-5 p-5  mx-auto mb-6">
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
      </h3>
      <div className="flex flex-col items-center mt-5 p-5">
        <img
          src={profileImage}
          alt="Candice Wu"
          className="w-14 h-14 rounded-full mb-3"
        />
        <p className="text-lg font-semibold text-gray-800">Candice Wu</p>
        <p className="text-sm text-gray-600">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;
