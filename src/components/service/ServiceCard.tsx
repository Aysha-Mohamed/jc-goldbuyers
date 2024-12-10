import React from 'react';
import { Check } from 'lucide-react';
import type { ServiceProps } from '../../types';

const ServiceCard: React.FC<ServiceProps> = ({ title, description, image, features, imageLeft }) => {
  return (
    <div className="bg-gray-50 overflow-hidden shadow-sm transform hover:scale-[1.02] transition-all duration-300">
      <div className={`flex flex-col lg:flex-row ${!imageLeft && 'lg:flex-row-reverse'}`}>
        <div className="lg:w-1/2">
          <div className="relative h-full min-h-[300px]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-barlow font-bold mb-6">{title}</h3>
          <p className="text-gray-700 text-lg mb-8 font-barlow">{description}</p>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-600 text-lg font-barlow">
                <Check className="w-6 h-6 text-[#B8860B] mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 bg-[#B8860B] text-white py-3 px-8 hover:bg-[#986C0C] transition duration-300 self-start font-barlow font-bold text-lg"
          >
            Get Your Quote Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;