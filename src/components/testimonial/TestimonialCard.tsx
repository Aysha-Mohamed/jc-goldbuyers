import React from 'react';
import type { TestimonialProps } from '../../types';

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <p className="text-gray-700 text-lg mb-8 font-barlow">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="text-gray-900 font-semibold font-barlow">{name}</h4>
          <p className="text-[#B8860B] font-barlow">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;