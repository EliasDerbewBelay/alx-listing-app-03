// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">ALX Listing</h3>
            <p className="text-sm">Find your perfect stay worldwide.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">
              About
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} ALX Listing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
