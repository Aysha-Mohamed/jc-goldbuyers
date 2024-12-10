import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-barlow font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 font-barlow">
            Ready to sell your precious items? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-barlow font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 font-barlow">264 Newark Ave, Jersey City, NJ 07302</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-barlow font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 font-barlow">(917) 682-2913</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-barlow font-bold mb-2">Business Hours</h3>
                <p className="text-gray-600 font-barlow">10AM - 6PM Monday - Friday</p>
                <p className="text-gray-600 font-barlow">10AM - 5PM Sunday</p>
                <p className="text-gray-600 font-barlow">12.30PM - 4.30PM Saturday</p>
                <p className="text-gray-600 font-barlow">Close Sunday</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-barlow font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 font-barlow">info@jerseycitygoldbuyers.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-barlow font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition duration-200 font-barlow"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-barlow font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition duration-200 font-barlow"
                  placeholder="123-456-7890"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-barlow font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition duration-200 font-barlow"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-barlow font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition duration-200 font-barlow"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B8860B] text-white py-3 px-6 rounded-md hover:bg-[#986C0C] transition duration-300 transform hover:scale-105 font-barlow font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
