import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, LockKeyhole } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <LockKeyhole className="h-5 w-5 text-emerald-500" />
              <span className="text-gray-900 dark:text-white">Pass</span>
              <span className="text-emerald-500">&lt;OP/&gt;</span>
            </Link>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Your secure, personal password manager that keeps your digital life organized and protected.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/passwords" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                  Password Manager
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} PassOP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;