import React from 'react';

function CTA() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Start your free trial
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <div className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-6 py-3 border border-gray-200 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Learn more
              </button>
            </div>
            <div className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;