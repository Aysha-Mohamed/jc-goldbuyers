import React from 'react';
import BannerImage from '../Assets/Banner.png';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-barlow font-bold mb-6 text-center leading-tight">
            Turn Your Valuables
            <br />
            Into Instant Cash
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-barlow">Jersey City's Most Trusted Buyer</p>
          <p className="text-lg md:text-xl mb-8 text-[#FFD700] font-barlow tracking-wider text-center">
            Gold Bullion &nbsp;•&nbsp; Luxury Watches &nbsp;•&nbsp; Fine Jewelry &nbsp;•&nbsp; Lab Grown Diamonds
          </p>
          <a
            href="#contact"
            className="bg-[#B8860B] hover:bg-[#986C0C] text-white px-10 py-4 transition duration-300 font-barlow font-bold text-xl transform hover:scale-105 hover:shadow-lg"
          >
            Get Your Best Price Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;