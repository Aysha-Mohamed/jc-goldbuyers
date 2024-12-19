import React from 'react';
import Instagram from '../Assets/instagram.svg';
import Yelp from '../Assets/yelp.svg';
import Google from '../Assets/google.svg';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-barlow font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-[#B8860B] transition-colors font-barlow"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#B8860B] transition-colors font-barlow"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-[#B8860B] transition-colors font-barlow"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#B8860B] transition-colors font-barlow"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-barlow font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 mb-2 font-barlow">264 Newark Ave</p>
              <p className="text-gray-600 mb-4 font-barlow">Jersey City, NJ 07302</p>
              <p className="text-gray-600 mb-2 font-barlow">(201)-332-1551</p>
              <p className="text-gray-600 font-barlow">info@jcgoldbuyers.com</p>
            </address>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-barlow font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
                <p className="text-gray-600 font-barlow">Monday - Thursday 10.30AM - 6PM</p>
                <p className="text-gray-600 font-barlow">Friday 10.30AM - 5PM</p>
                <p className="text-gray-600 font-barlow">Saturday 12.30PM - 4.30PM</p>
                <p className="text-gray-600 font-barlow">Sunday Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-barlow">
              © 2024 JC Gold Buyers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* <a
                href="/privacy"
                className="text-gray-500 hover:text-[#B8860B] text-sm transition-colors font-barlow"
              >
                Privacy Policy
              </a> */}
              {/* <a
                href="/terms"
                className="text-gray-500 hover:text-[#B8860B] text-sm transition-colors font-barlow"
              >
                Terms of Service
              </a> */}
              <a href='https://www.instagram.com/jcgoldbuyers/' target='_blank' rel="noreferrer">
               <img src={Instagram} alt="Instagram" className="h-5 w-5" />
              </a>
              <a href='https://www.yelp.com/biz/jersey-city-gold-buyers-jersey-city-2'  target='_blank' rel="noreferrer">
                <img src={Yelp} alt='Yelp' className='h-5 w-5'/> 
              </a>
              <a href='https://www.google.com/search?q=jersey+city+gold+buyers'  target='_blank' rel="noreferrer">
                <img src={Google} alt='Google' className='h-5 w-5'/> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;