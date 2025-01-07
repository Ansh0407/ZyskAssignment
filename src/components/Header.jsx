import React from 'react';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png'; 

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
      {/* Logo and Navigation Links */}
      <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-32">
        <img src={logo} alt="Zysk Logo" className="w-16 h-8 md:w-20 md:h-10" />

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 md:space-x-8">
          <a href="#home" className="text-gray-700 hover:text-red-500">Home</a>
          <div className="relative group">
            <a href="#products" className="text-gray-700 hover:text-red-500 flex items-center">
              Products
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-1">
              <a href="#product1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 1</a>
              <a href="#product2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 2</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#resources" className="text-gray-700 hover:text-red-500 flex items-center">
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-1">
              <a href="#resource1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 1</a>
              <a href="#resource2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 2</a>
            </div>
          </div>
          <a href="#pricing" className="text-gray-700 hover:text-red-500">Pricing</a>
        </nav>
      </div>

      {/* Profile Image */}
      <div className="w-10 h-10">
        <img src={profile} alt="Profile" className="rounded-full" />
      </div>
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden flex justify-center mt-4">
      <nav className="flex flex-col space-y-2">
        <a href="#home" className="text-gray-700 hover:text-red-500">Home</a>
        <a href="#products" className="text-gray-700 hover:text-red-500">Products</a>
        <a href="#resources" className="text-gray-700 hover:text-red-500">Resources</a>
        <a href="#pricing" className="text-gray-700 hover:text-red-500">Pricing</a>
      </nav>
    </div>
  </header>
);


export default Header;
