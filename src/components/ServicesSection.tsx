import React from 'react';
import ServiceCard from './service/ServiceCard.tsx';
import type { ServiceProps } from '../types';

const ServicesSection: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: 'Gold & Silver Buying',
      description:
        'Whether you have old jewelry, coins, or scrap metal, we offer competitive prices for your gold and silver.',
      image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMnJzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c444d9264d1e3212bb7b0706be157a4dcece29eb/gld_slvr.jpg',
      features: ['Free professional evaluations', 'Competitive market rates', 'Immediate cash payment'],
      imageLeft: true,
    },
    {
      title: 'Precious Stones',
      description: 'We buy and sell a wide variety of gemstones, including diamonds, sapphires, rubies, and more.',
      image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmZzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--36d25dcda195e32a54cf9a8fce91cb0a70a9bdf8/gems.jpg',
      features: ['Expert gemological analysis', 'Best market prices', 'Secure transactions'],
      imageLeft: false,
    },
    {
      title: 'Luxury Watches',
      description: 'From Rolex to Omega, we deal in high-end watches, offering fair trade for your luxury timepieces.',
      image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmpzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9aff2dc50e926f37c75a84edac56c7d95dfa7849/rolex.jpg',
      features: ['Authentication service', 'Fair market value', 'Immediate payment'],
      imageLeft: true,
    },
    {
      title: 'Jewelry',
      description:
        'Looking for something special? Our selection of rings, necklaces, and bracelets is sure to have the perfect piece.',
      image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMm5zRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--00dff100f70aa9cadceba24b2c33a902cd0c75ca/customdesign.jpg',
      features: ['Wide selection', 'Quality pieces', 'Expert guidance'],
      imageLeft: false,
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-barlow font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-barlow">
            Expert jewelry and precious metals services with over a decade of trusted experience. We
            specialize in buying gold, silver, diamonds, and luxury timepieces at competitive market rates.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;