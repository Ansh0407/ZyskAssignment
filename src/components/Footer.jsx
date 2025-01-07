import React from "react";
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="px-6 max-w-screen-xl mx-auto">
        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {/* Product Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Product</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Overview</li>
              <li className="text-sm text-gray-600">Features</li>
              <li className="text-sm text-gray-600 flex items-center gap-2">
                Solutions 
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm">New</span>
              </li>
              <li className="text-sm text-gray-600">Tutorials</li>
              <li className="text-sm text-gray-600">Pricing</li>
              <li className="text-sm text-gray-600">Releases</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Company</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">About us</li>
              <li className="text-sm text-gray-600">Careers</li>
              <li className="text-sm text-gray-600">Press</li>
              <li className="text-sm text-gray-600">News</li>
              <li className="text-sm text-gray-600">Media kit</li>
              <li className="text-sm text-gray-600">Contact</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Blog</li>
              <li className="text-sm text-gray-600">Newsletter</li>
              <li className="text-sm text-gray-600">Events</li>
              <li className="text-sm text-gray-600">Help centre</li>
              <li className="text-sm text-gray-600">Tutorials</li>
              <li className="text-sm text-gray-600">Support</li>
            </ul>
          </div>

          {/* Use cases Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Use cases</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Startups</li>
              <li className="text-sm text-gray-600">Enterprise</li>
              <li className="text-sm text-gray-600">Government</li>
              <li className="text-sm text-gray-600">SaaS centre</li>
              <li className="text-sm text-gray-600">Marketplaces</li>
              <li className="text-sm text-gray-600">Ecommerce</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Social</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Twitter</li>
              <li className="text-sm text-gray-600">LinkedIn</li>
              <li className="text-sm text-gray-600">Facebook</li>
              <li className="text-sm text-gray-600">GitHub</li>
              <li className="text-sm text-gray-600">AngelList</li>
              <li className="text-sm text-gray-600">Dribbble</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Terms</li>
              <li className="text-sm text-gray-600">Privacy</li>
              <li className="text-sm text-gray-600">Cookies</li>
              <li className="text-sm text-gray-600">Licenses</li>
              <li className="text-sm text-gray-600">Settings</li>
              <li className="text-sm text-gray-600">Contact</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4">
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