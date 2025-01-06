import React from 'react';
import boltshift from '../assets/images/boltshift.png';
import lightbox from '../assets/images/lightbox.png';
import featherdev from '../assets/images/featherdev.png';
import spherule from '../assets/images/spherule.png';
import globalbank from '../assets/images/globalbank.png';
import nietzsche from '../assets/images/nietzsche.png';

const SocialProof = () => {
  return (
    <section className="bg-white py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-gray-500 text-sm font-medium">
          Join 4,000+ companies already growing
        </p>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <img
          src={boltshift}
          alt="Boltshift"
          className="h-12 object-contain"
        />
        <img
          src={lightbox}
          alt="Lightbox"
          className="h-12 object-contain"
        />
        <img
          src={featherdev}
          alt="FeatherDev"
          className="h-12 object-contain"
        />
        <img
          src={spherule}
          alt="Spherule"
          className="h-12 object-contain"
        />
        <img
          src={globalbank}
          alt="GlobalBank"
          className="h-12 object-contain"
        />
        <img
          src={nietzsche}
          alt="Nietzsche"
          className="h-12 object-contain"
        />
      </div>
    </section>
  );
};

export default SocialProof;
