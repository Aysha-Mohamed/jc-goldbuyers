import React from 'react';
import ServiceCard from './service/ServiceCard.tsx';
import type { ServiceProps } from '../types';
import GoldRings from '../Assets/GoldBullion.png';
import LuxuryWatch from '../Assets/Watches.png';
import Jewellery from '../Assets/Jewellery.png';

const ServicesSection: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: 'Gold & Silver Buying',
      description:
        'Whether you have old jewelry, coins, or scrap metal, we offer competitive prices for your gold and silver.',
      image: GoldRings,
      features: ['Free professional evaluations', 'Competitive market rates', 'Immediate cash payment'],
      imageLeft: true,
    },
    // {
    //   title: 'Precious Stones',
    //   description: 'We buy and sell a wide variety of gemstones, including diamonds, sapphires, rubies, and more.',
    //   image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmZzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--36d25dcda195e32a54cf9a8fce91cb0a70a9bdf8/gems.jpg',
    //   features: ['Expert gemological analysis', 'Best market prices', 'Secure transactions'],
    //   imageLeft: false,
    // },
    {
      title: 'Luxury Watches',
      description: 'From Rolex to Omega, we deal in high-end watches, offering fair trade for your luxury timepieces.',
      image: LuxuryWatch,
      features: ['Authentication service', 'Fair market value', 'Immediate payment'],
      imageLeft: false,
    },
    {
      title: 'Jewelry',
      description:
        'Looking for something special? Our selection of rings, necklaces, and bracelets is sure to have the perfect piece.',
      image: Jewellery,
      features: ['Wide selection', 'Quality pieces', 'Expert guidance'],
      imageLeft: true,
    },
  ];

  return (
   <section id="services" className="bg-white py-20 scroll-mt-20 pb-10 md:pb-20" >

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