import React from 'react';

const ParallaxSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOW50RkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7d93f680d9726bec3d76e8c3f54db2f51ac4c0e4/custom.jpg)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-white font-barlow text-2xl md:text-3xl text-center mb-8">
            At Jersey City Gold Buyers,
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#B8860B]/90 to-[#986C0C]/80 backdrop-blur-sm p-6 md:p-8 border border-[#B8860B]/30">
              <p className="text-white font-barlow text-lg leading-relaxed">
                We also specialize in creating custom-made items, from stunning engagement rings to
                elegant tennis bracelets, using both natural and lab-grown diamonds. Our commitment
                to quality and craftsmanship ensures that every piece is as unique as the individual
                who wears it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B8860B]/90 to-[#986C0C]/80 backdrop-blur-sm p-6 md:p-8 border border-[#B8860B]/30">
              <p className="text-white font-barlow text-lg leading-relaxed">
                Whether you're looking to sell your precious items or find the perfect custom piece
                to add to your collection, we're here to help. We also buy and sell bullion,
                ensuring that you get the best value for your Gold or Silver investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
