import React from 'react';
import MetalsImage from '../Assets/metals.webp';

const InvestmentSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-barlow font-bold mb-6">Investing in Precious Metals</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 font-barlow">
            Discover the enduring appeal and financial advantages of owning gold and silver. These
            timeless metals have been trusted stores of value for millennia, offering both stability
            and growth potential to your investment portfolio.
          </p>
        </div>

        <div className="relative h-[800px] md:h-[600px] overflow-hidden mb-20">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: `url(${MetalsImage})`,
              transform: 'translateZ(0)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-[#B8860B]/90 to-[#986C0C]/80 backdrop-blur-sm p-8 rounded-lg border border-[#B8860B]/30">
                  <h4 className="text-white font-barlow font-bold text-2xl mb-4">Why Buy Gold?</h4>
                  <p className="text-white font-barlow text-lg leading-relaxed">
                    Gold has proven itself as the ultimate safe-haven asset throughout history. Its
                    unique properties make it an excellent hedge against:
                  </p>
                  <ul className="mt-4 space-y-2 text-white font-barlow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Market volatility and economic uncertainty
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Currency devaluation and inflation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Geopolitical risks
                    </li>
                  </ul>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-gray-200 shadow-lg">
                  <h4 className="text-gray-800 font-barlow font-bold text-2xl mb-4">
                    Why Buy Silver?
                  </h4>
                  <p className="text-gray-700 font-barlow text-lg leading-relaxed">
                    Silver offers unique advantages as both a precious metal and industrial
                    commodity:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700 font-barlow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      More affordable entry point than gold
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Growing industrial demand in technology
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Essential component in green energy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-barlow font-bold mb-6">Ready to Start Investing?</h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-barlow">
            Whether you're interested in gold, silver, or both, our experts are here to guide you
            through your investment journey. Contact us today to learn more about precious metal
            investments.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#B8860B] text-white px-8 py-4 text-lg font-barlow font-bold hover:bg-[#986C0C] transition duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
