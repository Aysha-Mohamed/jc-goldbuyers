import React from 'react';
import TestimonialCard from './testimonial/TestimonialCard.tsx';
import type { TestimonialProps } from '../types';
import JonathanImage from '../Assets/Jonathan.jpg';
import MarcImage from '../Assets/Marc.jpg';
import JennyImage from '../Assets/Jenny.jpg';
import JeannetteImage from '../Assets/Jeannette.jpg';

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Mike was very polite and a pleasure to work with and get to know. He was always available and provided me and my wife (who surprised me with this Omega!) with exceptional client service.",
      name: 'Jonathan R.',
      title: 'Hoboken, NJ',
      image: JonathanImage,
    },
    {
      quote: "I'm extremely happy with the visit and sale. I'll most likely be using him for my Cuban chain that I'm looking to get as well. I'd without a doubt recommend using Mike if you're looking for an honest experience!",
      name: 'Mark M.',
      title: 'Weehawken, NJ',
      image: MarcImage,
    },
    {
      quote: "Mike was very helpful when i sold some of my unwanted jewelry today. He is honest and fair when it comes to pricing and i walked out happy with his offer. I will definitely make the drive to come back if I ever want to cash in for gold and diamonds !",
      name: 'Jenny Y.',
      title: 'Union City, NJ',
      image: JennyImage,
    },
    {
      quote: "I was looking for a shop to sell some of my old jewelry that I no longer wear. I found Jersey City Gold Buyers after shopping around a few other places. I dealt with Mike who was extremely helpful and most importantly gave me the best price. I highly recommend this place if you are looking for an honest and knowledgeable place.",
      name: 'Jeannette V.',
      title: 'Yonkers, NY',
      image: JeannetteImage,
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-barlow font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 font-barlow">
            Trusted by collectors and investors across New Jersey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;