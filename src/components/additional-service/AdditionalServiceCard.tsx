import React from 'react';

interface AdditionalServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const AdditionalServiceCard: React.FC<AdditionalServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-barlow font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 font-barlow leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AdditionalServiceCard;