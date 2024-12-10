import React from 'react';
import TestimonialCard from './testimonial/TestimonialCard.tsx';
import type { TestimonialProps } from '../types';

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "This place is is the best and gives incredible value for your pieces. Honest and straight forward!! Appreciate you Mike!!!!",
      name: 'Nisha S',
      title: 'Jersey City, NJ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      quote: 'We walked away very satisfied with our outcome, as we received a very fair price for our items.',
      name: 'Ricky T.',
      title: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    {
      quote: "Offers you a great fair price . Cash in minutes, no pressure gives you details. Looking forward to doing business again.",
      name: 'Dimitrius D.',
      title: 'Flushing, NY',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    {
      quote: "I'm glad I came here! Mike was friendly, not intimidating, knowledgeable, and most of all provided a fair price. Overall it was a good experience.",
      name: 'Simon T.',
      title: 'Livingston, NJ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
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