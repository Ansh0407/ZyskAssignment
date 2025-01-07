import React from "react";
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="px-6 max-w-screen-xl mx-auto">
        {/* Responsive grid layout: 2 columns on mobile, 6 columns on laptop */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 gap-y-8">
          {/* Product Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Product</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-900">Overview</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Features</li>
              <li className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                Solutions 
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm">New</span>
              </li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Tutorials</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Pricing</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Releases</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Company</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-900">About us</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Careers</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Press</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">News</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Media kit</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Contact</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-900">Blog</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Newsletter</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Events</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Help centre</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Tutorials</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Support</li>
            </ul>
          </div>

          {/* Use cases Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Use cases</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-900">Startups</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Enterprise</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Government</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">SaaS centre</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Marketplaces</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Ecommerce</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Social</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-900">Twitter</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Facebook</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">GitHub</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">AngelList</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Dribbble</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-900">Terms</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Privacy</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Cookies</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Licenses</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Settings</li>
              <li className="text-sm text-gray-600 hover:text-gray-900">Contact</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <img src={logo} alt="Zysk Logo" className="h-6" />
            <p className="text-sm text-gray-500">
              © 2077 zysktechnologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;