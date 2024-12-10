import React from 'react';

const AboutSection = () => {
  const features = [
    {
      image:
        'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlRzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b94c2596e58602e044ec6d964b926c9b72190b95/evaluate.jpg',
      title: 'Expert Evaluation',
      description: 'Professional assessment of your precious items by certified specialists',
    },
    {
      image:
        'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlhzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--289e84230a3d7e6fe501544a55c0bd926f75c671/transactions.jpg',
      title: 'Secure Transactions',
      description: 'Safe, confidential, and transparent buying process',
    },
    {
      image:
        'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlBzRkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--812427916962651544a3de27a31111b8795dae8a/expereince.jpg',
      title: 'Decade of Experience',
      description: 'Serving Jersey City with trust and reliability since 2011',
    },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-barlow font-bold text-center mb-8">About Us</h2>

        <div className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-16 font-barlow">
          <p className="mb-4">Welcome to Jersey City Gold Buyers!</p>
          <p className="mb-8">
            I'm Mike, the proud owner of this family-run jewelry store, which has been serving our
            community since 2011. With over a decade of experience, I specialize in buying and
            selling gold and silver jewelry, as well as high-end watches from renowned brands like
            Rolex, Cartier, Breitling & more!
          </p>
          <p className="italic text-[#B8860B]">
            Thank you for considering us for your jewelry and bullion needs. I look forward to
            serving you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-barlow font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-barlow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
