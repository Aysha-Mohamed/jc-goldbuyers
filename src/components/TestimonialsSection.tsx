import React from 'react';
import TestimonialCard from './testimonial/TestimonialCard.tsx';
import type { TestimonialProps } from '../types';

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The most professional gold buyers I've ever dealt with. Got an excellent price for my jewelry collection.",
      name: 'Sarah Chen',
      title: 'Luxury Watch Collector',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      quote: 'Their expertise in evaluating precious stones is unmatched. Transparent and honest service.',
      name: 'Michael Rodriguez',
      title: 'Estate Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    {
      quote: 'Quick, professional, and the best rates in Jersey City. Highly recommend their services.',
      name: 'Emily Thompson',
      title: 'Private Collector',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    {
      quote: 'Their authentication service for luxury watches saved me from making a costly mistake.',
      name: 'David Park',
      title: 'Watch Enthusiast',
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