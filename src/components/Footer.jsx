import React from "react";
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      {/* Full-width container to avoid extra space */}
      <div className="w-full px-4 md:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ml-16">
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Use cases</h4>
          <ul className="space-y-2 text-sm">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Social</h4>
          <ul className="space-y-2 text-sm">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img src= {logo} alt="Zysk Logo" className="h-8 ml-32" />
        </div>
        <p className="text-sm text-gray-600 mr-16">© 2077 zysktechnologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
