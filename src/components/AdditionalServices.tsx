import React from 'react';
import AdditionalServiceCard from './additional-service/AdditionalServiceCard.tsx';
import { additionalServicesData } from './additional-service/additionalServicesData.ts';

const AdditionalServices = () => {
  return (
    <section id='additionalServices' className="bg-gray-50 py-2 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServicesData.map((service, index) => (
            <AdditionalServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;