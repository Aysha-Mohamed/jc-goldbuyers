import React from 'react';
import Logo1 from '../Assets/Logo_1.jpg';
interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`transition-all duration-300 ${isScrolled ? 'h-20 sm:h-24' : 'h-24 sm:h-32'}`}>
        <img
          src={Logo1}
          alt="JC Gold Buyers Logo"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;