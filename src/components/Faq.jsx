import React, { useState } from 'react';
import profile1 from '../assets/images/left.png';
import profile2 from '../assets/images/profile.png';
import profile3 from '../assets/images/byson.png';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: ""
    },
    {
      question: "What is your cancellation policy?",
      answer: ""
    },
    {
      question: "Can other info be added to an invoice?",
      answer: ""
    },
    {
      question: "How does billing work?",
      answer: ""
    },
    {
      question: "How do I change my account email?",
      answer: ""
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-4">Frequently asked questions</h1>
      <p className="text-center mt-5 text-gray-600 mb-8">Everything you need to know about the product and billing.</p>
      
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left text-lg font-medium text-gray-900 flex justify-between items-center py-2"
          >
            {item.question}
            <span className="text-gray-500">
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="text-gray-700 mt-2">
              {item.answer || <p>No details available for this question.</p>}
            </div>
          )}
        </div>
      ))}

      <div className="mt-12 text-center">
        <div className="relative flex justify-center items-center mb-4">
          <img src={profile1} alt="Profile 1" className="rounded-full w-12 h-12 border-2 border-white z-10" />
          <img src={profile2} alt="Profile 2" className="rounded-full w-12 h-12 border-2 border-white z-20 -ml-4" />
          <img src={profile3} alt="Profile 3" className="rounded-full w-12 h-12 border-2 border-white z-10 -ml-4" />
        </div>
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default FAQ;
